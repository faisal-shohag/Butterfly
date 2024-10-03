"use client"

import React, { useState } from 'react';
import Linkify from '@/app/(routes)/forum/Linkify';
import { ChevronUp, Ellipsis } from 'lucide-react';

const CustomRenderer = ({ content, maxLength = 300 }) => {
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = content.length > maxLength;
  const displayContent = expanded ? content : content.slice(0, maxLength);

  const toggleExpanded = () => setExpanded(!expanded);

  const renderContent = (text) => {
    return text.split('\n').map((line, index) => (
      <div key={index}>
        <Linkify>{line}</Linkify>
        {index < text.split('\n').length - 1 && <br />}
      </div>
    ));
  };

  return (
    <div>
      <div className="whitespace-pre-wrap">
        {renderContent(displayContent)}
        {!expanded && shouldTruncate && '...'}
      </div>
      {shouldTruncate && (
        <div
          onClick={toggleExpanded}
          className="custom-glass-2 px-2 py-1 flex justify-center items-center rounded-xl w-11 mt-2 cursor-pointer"
        >
          {expanded ? <ChevronUp size={20} /> : <Ellipsis size={20} />}
        </div>
      )}
    </div>
  );
};

export default CustomRenderer;
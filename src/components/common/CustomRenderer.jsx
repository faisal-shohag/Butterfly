"use client";

import React, { useState, useRef, useEffect } from 'react';
import Linkify from '@/app/(routes)/forum/Linkify';
import { ChevronUp, Ellipsis } from 'lucide-react';

const CustomRenderer = ({ content, maxLength = 300 }) => {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState('auto');
  const contentRef = useRef(null);

  const shouldTruncate = content.length > maxLength;
  const displayContent = expanded ? content : content.slice(0, maxLength);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const renderContent = (text) => {
    return text.split('\n').map((line, index) => (
      <div key={index}>
        <Linkify>{line}</Linkify>
        {index < text.split('\n').length - 1 && <br />}
      </div>
    ));
  };

  useEffect(() => {
    if (contentRef.current) {
      if (expanded) {
        setContentHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setContentHeight(`${contentRef.current.firstChild?.offsetHeight || 0}px`);
      }
    }
  }, [expanded]);

  return (
    <div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: contentHeight }}
        ref={contentRef}
      >
        <div className="whitespace-pre-wrap">
          {renderContent(displayContent)}
        </div>
      </div>
      {shouldTruncate && (
        <div
          onClick={toggleExpanded}
          className="custom-glass-2 px-2 py-1 flex justify-center items-center rounded-xl w-11 cursor-pointer"
        >
          {expanded ? <ChevronUp size={20} /> : <Ellipsis size={20} />}
        </div>
      )}
    </div>
  );
};

export default CustomRenderer;

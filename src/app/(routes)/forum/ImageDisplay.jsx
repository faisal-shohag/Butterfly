import Image from "next/image";
import PropTypes from "prop-types";

const ImageDisplay = ({ images }) => {
  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="mt-4 flex justify-center bg-gray-100 dark:bg-zinc-800 overflow-hidden">
      
        <Image
        height={300}
        width={500}
        priority 
          src={images[0].url}
          alt="Post image"
          className="max-h-[24rem] w-full object-contain"
        />
      </div>
    );
  }

  const getGridClass = (count) => {
    switch (count) {
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-2 md:grid-cols-3";
      case 4:
        return "grid-cols-2";
      default:
        return "grid-cols-2 md:grid-cols-3";
    }
  };

  return (
    <div className={`mt-4 grid ${getGridClass(images.length)} gap-2`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`bg-gray-100 dark:bg-zinc-900 overflow-hidden ${
            images.length === 3 && index === 0 ? "row-span-2 md:row-span-2" : ""
          } ${
            images.length === 4 && index === 0 ? "col-span-2 row-span-2" : ""
          }`}
        >
          <Image
          height={300}
          width={300}
            src={image.url}
            alt={`Post image ${index + 1}`}
            className={`w-full h-full object-cover ${
              (images.length === 3 && index === 0) ||
              (images.length === 4 && index === 0)
                ? "max-h-96"
                : "max-h-48"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

ImageDisplay.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ),
};

export default ImageDisplay;
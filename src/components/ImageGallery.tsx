import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
interface PropsType {
  photos: string[];
}

const PhotoGallery = ({ photos }: PropsType) => {
  const [currentImage, setCurrentImage] = useState(photos[0]);

  return (
    <div className="relative flex flex-col items-center p-2">
      <LazyLoadImage src={currentImage} className="w-60" />
      <div className="flex justify-center">
        {photos.map((image, index) => (
          <div key={index} className="relative overflow-hidden pb-2/3">
            <LazyLoadImage
              src={image}
              className="w-24 px-2 py-4"
              // className="absolute h-full w-full object-cover"
              key={index}
              onClick={() => setCurrentImage(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;

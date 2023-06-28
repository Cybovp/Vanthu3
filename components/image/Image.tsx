import Image from "next/image";
import React from "react";
// Khai báo một component sử dụng props
interface ImageProps {
  src: string;
  alt: string;
  className: string;
}
const ImageComponent = (props: ImageProps) => {
  return (
    <div>
      <Image
        src={props.src}
        width={50}
        height={50}
        alt={props.alt}
        className={props.className}
      />
    </div>
  );
};

export default ImageComponent;

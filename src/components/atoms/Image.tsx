import React from "react";
import { default as NextImage } from "next/image";

interface IProps {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  scale?: number;
  layout?: "fill";
  objectFit?: "cover" | "contain";
  className?: string;
}

const Image: React.FC<IProps> = ({
  url,
  width,
  height,
  layout,
  objectFit,
  alt = "",
  scale = 100,
  className = "",
}) => {
  return (
    <NextImage
      src={url}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      objectFit={objectFit}
      className={`scale-${scale} ${className}`}
    />
  );
};

export default Image;

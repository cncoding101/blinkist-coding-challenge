import React from "react";
import { default as NextImage } from "next/image";

interface IProps {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  scale?: number;
  fill?: boolean;
  style?: Record<string, unknown>;
  className?: string;
}

const Image: React.FC<IProps> = ({
  url,
  width,
  height,
  fill,
  alt = "",
  scale = 100,
  style,
  className = "",
}) => {
  return (
    <NextImage
      src={url}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      style={style}
      className={`scale-${scale} ${className}`}
    />
  );
};

export default Image;

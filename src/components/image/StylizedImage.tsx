import React from "react";

type Direction = "nw" | "ne" | "sw" | "se";

type Props = {
  src: string;
  alt: string;
  shadowDirection: Direction;
  width: string;
}

const StylizedImage = ({ src, alt, shadowDirection, width }: Props) => {
  const getBoxShadow = (dir: Direction) => {
    switch (dir) {
      case "sw":
        return "rgb(235 234 235) -25px 30px";

      case "se":
        return "rgb(235 234 235) 25px 30px";

      case "nw":
        return "rgb(235 234 235) -25px -30px";

      case "ne":
        return "rgb(235 234 235) 25px -30px";

      default:
        break;
    }
  };

  return (
    <img
      className="img"
      src={src}
      alt={alt}
      style={{
        boxShadow: getBoxShadow(shadowDirection),
        width: width,
        zIndex: "-1",
      }}
    />
  );
};

export default StylizedImage;

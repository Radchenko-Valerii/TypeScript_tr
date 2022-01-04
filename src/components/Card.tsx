import React, { useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width: string;
  height: string;
  variant: CardVariant;
  onClick: (num: number)=> void;
  cursor?: string;
  title: string;
}


const Card: React.FC<CardProps> = ({ width, height, variant, children, cursor, title, onClick}) => {
  
  const [state, setState] = useState(0);
  
  return (
    <div
      style={{
        width,
        height,
        cursor,
        background: variant === CardVariant.primary ? "yellow" : "black",
        border: variant === CardVariant.outlined ? "10px solid red" : "none",
      }}
      title={title}
      onClick={()=>onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;

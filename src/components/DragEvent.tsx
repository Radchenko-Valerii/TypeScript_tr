import React, { FC, useState } from "react";

export const DragEvent: FC = () => {
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const overHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  };

  return (
    <div style={{ paddingTop: "20px", paddingBottom: "30px" }}>
      <div
        onDrag={(e: React.DragEvent<HTMLDivElement>) => {console.log('drag', e)}}
        draggable
        style={{ width: "200px", height: "200px", background: "red" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={overHandler}
        style={{
          width: "200px",
          height: "200px",
          background: isDrag ? "red" : "blue",
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
};

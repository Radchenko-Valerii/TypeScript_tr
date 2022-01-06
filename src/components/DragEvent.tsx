import React, { FC, ReactEventHandler, useState } from "react";

export const DragEvent: FC = () => {
  const [isDrag, setIsDrag] = useState<boolean>(true);

  const overHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
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
        onDragOver={overHandler}
        onDragLeave={leaveHandler}
        style={{
          width: "200px",
          height: "200px",
          background: isDrag ? "blue" : "red",
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
};

import Draggable from "react-draggable";
import React from "react";
import "./SixthComponentDraggable.css";

export function SixthComponentDraggable({ setSl, slick, sl, itemData }) {
  const nodeRef = React.useRef(null);

  const eventHandler = (e) => {
    if (
      e.movementX >= 0 &&
      e.offsetX <= window.innerWidth * 0.8 &&
      e.x >= 100
    ) {
      setSl((prev) => prev + 1);
      if (slick) {
        slick.slickGoTo(sl + 1);
      }
    } else if (
      e.movementX < 0 &&
      e.offsetX <= window.innerWidth * 0.8 &&
      e.x >= 100
    ) {
      setSl((prev) => prev - 1);
      if (slick) {
        slick.slickGoTo(sl - 1);
      }
    }
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      axis="x"
      handle=".handleDrag"
      defaultClassNameDragging="handleDraggged"
      defaultPosition={{ x: 0, y: 0 }}
      grid={[(window.innerWidth * 0.8) / itemData.length, 0]}
      bounds={{ left: 0, top: 0, right: window.innerWidth * 0.8, bottom: 0 }}
      onDrag={eventHandler}
    >
      <div ref={nodeRef} className="handleDrag">
        drag
      </div>
    </Draggable>
  );
}

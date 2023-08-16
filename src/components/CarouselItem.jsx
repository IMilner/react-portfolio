import React from "react";

function CarouselItem(props) {
  let style = " ";
  if (props.index === 0) {
    style = "prev";
  } else if (props.index === 1) {
    style = "active";
  } else if (props.index === 2) {
    style = "next";
  }

  return (
    <>
      <div className={`item ${style}`}>
        <a target={props.target}>
          <img src={props.src} />
        </a>
        <p>{props.title}</p>
      </div>
    </>
  );
}

export default CarouselItem;
import React from "react";

const Like = props => {
  let classes = "like fa fa-heart";
  if (!props.liked) classes += "-o black";
  return (
    <i
      onClick={props.onClick}
      className={classes}
      aria-hidden="true"    
    />
  );
};

export default Like;

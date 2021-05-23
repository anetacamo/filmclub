import React from 'react';

const Like = ({ featured, onClick }) => {
  let classes = 'like fa fa-heart';
  if (!featured) classes += '-o black';
  return <i onClick={onClick} className={classes} aria-hidden='true' />;
};

export default Like;

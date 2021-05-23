import React from 'react';

const Seen = ({ featured, onClick }) => {
  let classes = 'eye fa fa-eye';
  if (!featured) classes += ' black';
  return <i onClick={onClick} className={classes} aria-hidden='true' />;
};

export default Seen;

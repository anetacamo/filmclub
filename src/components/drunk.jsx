import React from 'react';

const Drunk = ({ onChange, state }) => {
  let classes = 'eye fa fa-beer';
  if (!state) classes += ' black';
  return <i onChange={onChange} className={classes} aria-hidden='true' />;
};

export default Drunk;

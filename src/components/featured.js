import React from 'react';

export default function Featured({ featured, onClick, icon, type }) {
  let classes = `fa ${icon} ${!featured && ' black'}`;
  console.log('type: ', type);
  return (
    <i
      onClick={() => onClick({ type })}
      className={classes}
      aria-hidden='true'
    />
  );
}

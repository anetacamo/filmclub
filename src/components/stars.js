import React from 'react';

const Stars = ({ popularity }) => {
  let stars = [];
  const rating = Math.round(popularity);

  for (var i = 0; i < rating; i++) {
    stars.push(<i className='fa fa-star' aria-hidden='true' key={i} />);
  }
  for (var j = 0; j < 5 - rating; j++) {
    stars.push(<i className='fa fa-star-o' aria-hidden='true' key={j + 5} />);
  }
  return stars;
};

export default Stars;

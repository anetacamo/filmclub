import React from 'react';

const Stars = ({ popularity }) => {
  let stars = [];
  const rating = Math.round(popularity);
  console.log(rating);
  for (var i = 0; i < rating; i++) {
    stars.push(<i className='fa fa-star' aria-hidden='true' key={i} />);
  }
  for (var i = 0; i < 5 - rating; i++) {
    stars.push(<i className='fa fa-star-o' aria-hidden='true' key={i + 5} />);
  }
  return stars;
};

export default Stars;

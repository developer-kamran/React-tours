import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const { id, image, info, price, name } = tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <article className='single-tour'>
        <img src={image} alt='' />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p style={{ marginBottom: '0' }}>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'Show less' : 'Read more'}
            </button>
          </p>

          <button
            className='delete-btn'
            onClick={() => {
              removeTour(id);
            }}
          >
            Not Interested
          </button>
        </footer>
      </article>
    </>
  );
};

export default Tour;

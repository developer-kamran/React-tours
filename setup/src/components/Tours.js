import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <section>
        <div className='title'>
          <h2>Our Tours</h2>
          <div className='underLine'></div>
          <div>
            {tours.map((tour) => {
              return (
                <Tour key={tour.id} tour={tour} removeTour={removeTour}></Tour>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tours;

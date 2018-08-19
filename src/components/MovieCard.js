import React from 'react';
import Observer from 'react-intersection-observer';

const posterPlaceHolder = '/placeholder.jpg';

const MovieCard = ({ Poster, Title }) => (
  <Observer>
    {({ inView, ref }) => (
      <div ref={ref} className="col-6 col-md-4">
        {inView && console.log(`Movie view: [${Title}]`)}
        <div className="card mb-2 p-0">
          <img className="card-img-top" src={Poster === 'N/A' ? posterPlaceHolder : Poster} alt="" />
          <div className="card-body">
            <h4 className="card-title">{Title}</h4>
          </div>
        </div>
      </div>
    )}
  </Observer>
);

export default MovieCard;

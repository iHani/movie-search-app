import React from 'react';

const posterPlaceHolder = '/placeholder.jpg';

const MovieCard = (props) => {
  const { Poster, Title } = props;
  return (
    <div className="col-6 col-md-4">
      <div className="card mb-2 p-0">
        <img className="card-img-top" src={Poster === 'N/A' ? posterPlaceHolder : Poster} alt="" />
        <div className="card-body">
          <h4 className="card-title">{Title}</h4>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;

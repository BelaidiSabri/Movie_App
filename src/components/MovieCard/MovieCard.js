import React, { useState } from "react";
import "../MovieCard/MovieCard.css";
import StarRatingComponent from "react-star-rating-component";

function MovieCard({ e }) {
  return (
    <div className="movieCard">
      <div className="type">{e.type}</div>
      <img src={e.posterURL} alt={e.title}></img>
      <div>
        <h1>{e.title}</h1>
        <p>{e.description}</p>

        <StarRatingComponent
          className="rating"
          // name="rate" /* name of the radio input, it is required */
          value={
            e.rating
          } /* number of selected icon (`0` - none, `1` - first) */
          starCount="5" /* number of icons in rating, default `5` */
          //onStarClick={Function(nextValue, prevValue, rate)} /* on icon click handler */
          //onStarHover={Function(nextValue, prevValue, rate)} /* on icon hover handler */
          //onStarHoverOut={Function(nextValue, prevValue, rate)} /* on icon hover out handler */
          //renderStarIcon={Function(nextValue, prevValue, rate)} /* it should return string or react component */
          //renderStarIconHalf={Function(nextValue, prevValue, rate)} /* it should return string or react component */
          starColor="#ffb400" /* color of selected icons, default `#ffb400` */
          emptyStarColor="grey" /* color of non-selected icons, default `#333` */
          editing="true" /* is component available for editing, default `true` */
        />
      </div>
    </div>
  );
}

export default MovieCard;

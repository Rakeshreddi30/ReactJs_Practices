import React from 'react'

const RestaurantCard = ({image,name,number_of_votes,price_starts_from,rating,type}) => {
  return (
    <>
    <div style={{display:"flex", flexDirection:"row" }}>
        <div className="card">
        <img src={image} alt=".." class="card-img-top"/>
        <h2>name : {name}</h2>
        <p>Votes : {number_of_votes}</p>
        <p>Prices : {price_starts_from}</p>
        <h4>Rating : {rating}</h4>
        <p>Type : {type}</p>
        </div>
    </div>
    </>
  )
}

export default RestaurantCard

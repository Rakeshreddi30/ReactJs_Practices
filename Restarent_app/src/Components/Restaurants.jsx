import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { reducer } from './fetchReducer'
import RestaurantCard from './restaurantCard'
const initialData ={
    data:[],
    loading:false,
    error:false
}
const Restaurants = () => {
   const[state, dispatch]=useReducer(reducer, initialData);
   const restaurantData = ()=>{
      return axios.get("http://localhost:3000/restaurants")
   }

   useEffect(()=>{
      dispatch({type:"FETCH_LOADING"})
      restaurantData().then((response)=>{
        console.log(response);
        dispatch({type:"FETCH_SUCCESS", payload:response.data })
      }).catch((error)=>{
        console.log(error);
        dispatch({type:"FETCH_error"})
      })
   },[])

   const{data, loading, error} = state;
  return (
    loading ? <h1>Loading...</h1> : error ? <h1>Something went wrong</h1> : data.map((elements)=>{
      return <RestaurantCard key={elements.id} {...elements}/>
    })
   
  )
}

export default Restaurants
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleUser = () => {
    const params = useParams()
     const [data, setData] = useState({})
     console.log(params);
        async function fetchingData(){ 
            try{
                let data = await fetch(`https://reqres.in/api/users/${params.id}`);
                let response = await data.json();
                console.log(response.data);
                setData(response?.data || {});
            }catch(error){
                console.log("Fetching failed ", error);
            }}
      useEffect(()=>{
           fetchingData();
        },[])
  return (
    <div style={{border:"1px solid white", padding:"10px" , margin:"10px"}}>
        <img style={{width:"250px"}} src={data.avatar} alt=""/>
         <p style={{margin:"0px", color:"black", backgroundColor:"white"}}>{data.first_name}</p>
         
    </div>
  )
}

export default SingleUser
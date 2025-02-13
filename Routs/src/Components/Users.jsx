import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/ContextProvider';
import Login from './Login';

const Users = () => {
    const [data, setData] = useState([])
    const{isAuth, login,logout}=useContext(AuthContext)
    const[page, setPage] = useState(1);
    async function fetchingData(){ 
        try{
            let data = await fetch(`https://reqres.in/api/users?page=${page}`);
            let response = await data.json();
            setData(response?.data || []);
        }catch(error){
            console.log("Fetching failed ", error);
        }}
  useEffect(()=>{
       fetchingData();
    },[page])
    if(!isAuth){
       return (
        <>
         <Navigate to= "/login"/>
        </>
       )
    }
    const handleChange = (value)=>{
      let changeBy = page + value;
      if(changeBy>=1){
        setPage(changeBy);
      }
    }
  return (
    <div>
      {isAuth && <button onClick={logout}>Logout</button>}
       {data.map((user)=>{
        return(
            
            <div key={user.id} style={{border:"1px solid white", padding:"10px" , margin:"10px"}}>
            <img style={{width:"250px"}}src={user.avatar} alt="profile"/> 
            <hr></hr>
            <Link to={`${user.id}`}>
              <p style={{margin:"0px", color:"black", backgroundColor:"white"}}>{user.first_name}</p>
            </Link>
            </div>
        )
       })}
       <button onClick={()=>{handleChange(-1)}} disabled={page===1}>Prev</button>
       <button onClick={()=>{handleChange(+1)}}>Next</button>
    </div>
  )
}

export default Users
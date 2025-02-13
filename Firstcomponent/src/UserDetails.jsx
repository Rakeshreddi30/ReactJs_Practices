import { useState } from 'react';
import './userDetails.css'

function UserDetails(props){
    const{data} = props
    const[button,setButtonText] = useState(data)
    const  handleFollow = (id) => {
      const updateButton = button.map((element)=>{
        if(element.id === id){
          const isFollowing = element.text ==="Following";
          return {
            ...element,
            text : isFollowing ? "Follow" : "Following",
            followers : isFollowing ? element.followers-1 : element.followers+1,
          };
        }
         return element;
         } );
      setButtonText(updateButton);
    }; 
    return(
     <> 
     {
    button.map((user)=>(
        <div key={user.id} className="container">
        {/* Profile Section */}
         <div className="profileSection"> 
         <div className="nameSection">
            <img
            src= {user.profile}
            alt="profile"
            className="profileImage"
          />
          <p className="name">
            {user.firstName} {user.lastName}
          </p>
        </div>
          <div className="stats">
            <div className="statItem">
              <h2 className="statNumber">{user.posts}</h2>
              <p>Posts</p>
            </div>
            <div className="statItem">
              <h2 className="statNumber">{user.followers}</h2>
              <p>Followers</p>
            </div>
            <div className="statItem">
              <h2 className="statNumber">{user.following}</h2>
              <p>Following</p>
            </div>
            <div>
              <div className="button" key={user.id}>
                <button className="followButton" onClick={()=> handleFollow(user.id)}>{user.text}</button>
                <p>...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
     }
     </>
    )
}

export default UserDetails;
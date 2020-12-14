import React  from 'react'

const Profile =(props) => {
// console.log("this the prop img: ",props.img)
    return (
        <div>
        <img src={props.img} alt='Hweda Bargo' />
        <h6>{props.name} </h6>
        <h3>{props.profission}</h3>
        <p>{props.bio}</p>
    </div>
      
        )
    }
export default Profile
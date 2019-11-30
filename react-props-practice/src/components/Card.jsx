import React from 'react';

export default function Card(props){
    return(
        <div className="Card">
        <h1 className="heading">My Contacts</h1>
        <div className="card">
          <div className="top">
            <h2 className="name">{props.name}</h2>
            <img className="circle-img"
              src={props.imgURL}
              alt="avatar_img"
            />
          </div>
          <div className="bottom">
            <p>{props.phone}</p>
            <p>{props.email}</p>
          </div>
        </div>
      </div>
    )
}

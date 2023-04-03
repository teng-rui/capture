import React from "react";

function Card(props) {


    return (
        <div className="card p-0" id={props.id}>
            <img className="card-img-top rounded-top"  src={props.img} alt="image loading failed "></img>
            <div className="card-body p-3">

                <a href={props.href}>
                <h1 className="card-title">{props.title}</h1>
                <p className="card-text">{props.content}</p>
                </a>
            </div>
        </div>
    )
}

export default Card;
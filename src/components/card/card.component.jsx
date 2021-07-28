import React from "react";
import "./card.styles.css";

export const Card = (props) => {
    return (
        <div className="card-container">
            <img
                alt="user"
                src={`https://robohash.org/${props.user.name}?set=set5&size=180x180&bgset=bg1`}
            />
            <h2>{props.user.name}</h2>
            <p>{props.user.email}</p>
        </div>
    );
};

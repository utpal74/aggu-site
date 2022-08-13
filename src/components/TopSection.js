
import React from "react";

const agguSmile = require('../imgs/aggu-smiles.jpg')

function getYears() {
    var differenceInTime = Math.abs(new Date() - new Date(2022, 6, 16));
    return Math.ceil(differenceInTime / (1000 * 60 * 60 * 24))
}

export default function TopSection() {
    return (
        <div className="top-seciton">
            <img className="profile-img" src={agguSmile} alt="Aggu smiling"></img>
            <div className="name_age">
                <h3>@Aggu</h3>
                <p className="age"><span> {getYears()} </span> days old</p>
            </div>
        </div>
    )
}

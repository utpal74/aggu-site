
import React from "react";

const agguSmile = require('../imgs/aggu-smiles.jpg')

function getAgeInformation() {
    const BIRTH_DATE = new Date(2022, 6, 16);
    const TODAY = new Date()

    const yearDiff = Math.abs(TODAY.getFullYear() - BIRTH_DATE.getFullYear())
    const monthDiff = Math.abs(TODAY.getMonth() - BIRTH_DATE.getMonth())
    const dayDiff = Math.abs(TODAY.getDate() - BIRTH_DATE.getDate())

    if (yearDiff === 0) {
        return `${monthDiff} month, ${dayDiff} days old`
    } else if (monthDiff === 0) {
        return `${dayDiff} days old`
    } else {
        return `${yearDiff} years, ${monthDiff} month old`
    }
}

export default function TopSection() {
    return (
        <div className="top-seciton">
            <img className="profile-img" src={agguSmile} alt="Aggu smiling"></img>
            <div className="name_age">
                <h3>@Aggu</h3>
                <p className="age"><span>{getAgeInformation()}</span></p>
            </div>
        </div>
    )
}

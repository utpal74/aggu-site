
import React from "react";
import { isYearDiffZero, getMessageForSameYear, isMonthDiffZero, getYearlyData, getMonthlyData } from "../utils/Age";

const agguSmile = require('../imgs/aggu-cute.jpeg')

function getAgeInformation() {
    return isYearDiffZero() ? 
            getMessageForSameYear() : 
                    isMonthDiffZero() ? getYearlyData() : getMonthlyData();
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

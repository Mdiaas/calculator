import React from "react";
import './index.css'
export interface DisplayProps{
    value:string
}
export function Display({value} : DisplayProps){
    return (
        <div className="display">{value}</div>
    )
}
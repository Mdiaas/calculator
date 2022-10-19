import React, { ReactNode } from "react";
import './index.css'
export interface ButtonProps{
    label: string,
    operation?:boolean,
    double?:boolean,
    triple?:boolean,
    click?: (label:any) => any;
}
export function Button({label, operation, double, triple, click}:ButtonProps){
    let classes = 'button '
    classes += operation ? 'operation ' : ''
    classes += double ? 'double ' : ''
    classes += triple ? 'triple ' : ''
    return (
        <button 
            onClick={e=>click && click(label)}
            className={classes}
        >
            {label}
        </button>
    )
}
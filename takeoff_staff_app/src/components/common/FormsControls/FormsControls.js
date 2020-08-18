import React from "react";
import classes from "./FormsControls.module.css";

export const Input = ({input, label, type, meta}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.inputWrapper}>
            <input
                className={`${hasError ? `${classes.error}` : `${classes.input}`}`}
                {...input}
                placeholder={label}
                type={type} />
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}
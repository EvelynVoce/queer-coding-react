import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom";

export default function RegistrationForm() {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const [show, setShow] = useState(false)
    const history = useHistory();

    const onSubmit = useCallback((formValues) => {
        console.log("Surname " + formValues.surname)
    },
        [history, setError],
    )

    return (
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <input className="form-field" placeholder="First Name"
                   {...register("firstName", { required: true })}
            />
            <input className="form-field" placeholder="Surname"
                   {...register("surname", { required: true})}
            />
            
            <label className="my-1"> Class: </label>
            <select className="form-field">
                <option value="python"> Python Fundamentals </option>
                <option value="web"> Web Development </option>
                <option value="ML-DA"> Machine Learning and Data Analysis </option>
            </select>    
            
            <button type="submit">Submit</button>
            {(errors.firstName || errors.surname) && <p> Regisration unsuccessful</p>}

            {show ?
                <div className="mt-4 d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status"></div>
                    <span className=" mx-3">Loading...</span>
                </div> : null
            }
        </form>
    );
}
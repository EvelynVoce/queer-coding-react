import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom";
import {registerAttendance} from "../api/registration";

export default function RegistrationForm() {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const [show, setShow] = useState(false)
    const history = useHistory();

    const onSubmit = useCallback((formValues) => {
        console.log("Surname " + formValues.surname)
        registerAttendance(formValues.surname);
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

            <input className="form-field" placeholder="Age"
                   {...register("age", { required: true})}
            />

            <label className="my-1"> Sexuality: </label>
            <select className="form-field">
                <option value="lesbian"> Lesbian </option>
                <option value="gay"> Gay </option>
                <option value="bisexual"> Bisexual </option>
                <option value="asexual"> Asexual </option>
                <option value="heterosexual"> Heterosexual </option>
                <option value="other-sexuality"> Other </option>
            </select>

            <label className="my-1"> Gender Identity: </label>
            <select className="form-field">
                <option value="male"> Male </option>
                <option value="female"> Female </option>
                <option value="trans-male"> Transgender Male </option>
                <option value="trans-female"> Transgender Female </option>
                <option value="gender-fluid"> Gender Fluid </option>
                <option value="agender"> Agender </option>
                <option value="other-gender"> Other </option>
            </select>

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
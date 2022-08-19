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
                   {...register("surname", { required: true, minLength: 8 })}
            />
            <button type="submit">Submit</button>
            {errors.surname && <p> Regisration unsuccessful</p>}

            {show ?
                <div className="mt-4 d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status"></div>
                    <span className=" mx-3">Loading...</span>
                </div> : null
            }
        </form>
    );
}
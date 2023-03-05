import React, { useState } from 'react';
import {registerAttendance} from "../api/registration";

export default function RegistrationForm() {
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [sexuality, setSexuality] = useState('');
    const [course, setCourse] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newErrors = {};
        if (age < 18) {
            newErrors.age = 'You must be over 18 to register';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        }
        
        registerAttendance(firstName, surname, age).then((response) => {
            console.log(response.data);
        })
    };

        return (
        <form className="register-form" onSubmit={handleSubmit}>

            <label> First Name: </label>
            <input
                type="text"
                className="form-field"
                placeholder="First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
            />
            
            <label> Surname: </label>
            <input
                type="text"
                className="form-field"
                placeholder="Surname"
                value={surname}
                onChange={(event) => setSurname(event.target.value)}
                required
            />
            
            <label> Age: </label>
            <input
                type="number"
                className="form-field"
                placeholder="Age"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                required
            />
            {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}

            <label> Gender: </label>
            <select className="form-field"
                    value={gender} onChange={(event) => setGender(event.target.value)} required>
                <option value="">Please select</option>
                <option value="male"> Male </option>
                <option value="female"> Female </option>
                <option value="trans-male"> Transgender Male </option>
                <option value="trans-female"> Transgender Female </option>
                <option value="gender-fluid"> Gender Fluid </option>
                <option value="agender"> Agender </option>
                <option value="other-gender"> Other </option>
            </select>

            <label> Sexuality: </label>
            <select className="form-field"
                    value={sexuality} onChange={(event) => setSexuality(event.target.value)} required>
                <option value="">Please select</option>
                <option value="lesbian"> Lesbian </option>
                <option value="gay"> Gay </option>
                <option value="bisexual"> Bisexual </option>
                <option value="asexual"> Asexual </option>
                <option value="heterosexual"> Heterosexual </option>
                <option value="other-sexuality"> Other </option>
            </select>

            <label> Course: </label>
            <select className="form-field"
                    value={course} onChange={(event) => setCourse(event.target.value)} required>
                <option value="">Please select</option>
                <option value="python"> Python Fundamentals </option>
                <option value="web"> Web Development </option>
                <option value="ML-DA"> Machine Learning and Data Analysis </option>
            </select>
            
            <button type="submit">Register</button>
        </form>
    );
}

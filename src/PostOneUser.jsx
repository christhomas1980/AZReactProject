
import React from 'react';
import { useState } from "react";
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from "axios";



let baseUrl = 'https://localhost:7211/api/v1/owner';
let ownerPassed = '';

let users2 = [

];
const PostOneUser = ({ }) => {

    const [inputOwnerValue, setInputOwnerValue] = useState("");
    const [inputSpeedValue, setInputSpeedValue] = useState("");
    const [inputCarModelValue, setInputCarModelValue] = useState("");
    const [ownerData, setOwnerData] = useState('');
    const [ownerData2, setOwnerData2] = useState('');
    function handleSubmit(e) {
        // ownerPassed = e;
        postUser();
    }

    function handleOwnerChange(e) {
        setInputOwnerValue(e.target.value);
    }

    function handleSpeedChange(e) {
        setInputSpeedValue(e.target.value);
    }


    function handleCarModelChange(e) {
        setInputCarModelValue(e.target.value);
    }


    async function postUser() {
        try {

            const response = await axios.post('https://localhost:7211/api/v1/owner/owner-name/', {
                owner: inputOwnerValue,
                speed: inputSpeedValue,
                carmodel: inputCarModelValue,

            });

            setOwnerData(response.data.data);
            return response.data.data;

        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div>
            <button onClick={handleSubmit}>GetMe</button>
            <input type="text" name="owner" onChange={handleOwnerChange}></input>
            <input type="text" name="carModel" onChange={handleCarModelChange}></input>
            <input type="text" name="speed" onChange={handleSpeedChange}></input>
        </div>



    );
}

export default PostOneUser;
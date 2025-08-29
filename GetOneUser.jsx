
import React from 'react';
import { useState } from "react";
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from "axios";



let baseUrl = 'https://localhost:7211/api/v1/owner';
let ownerPassed = '';

let users2 = [

];
const GetOneUser = ({ }) => {

    const [inputValue, setInputValue] = useState("");
    const [ownerData, setOwnerData] = useState('');
    const [ownerData2, setOwnerData2] = useState('');
    function handleSubmit(e) {
        // ownerPassed = e;
        mapData();
    }

    function handleOwnerChange(e) {
        setInputValue(e.target.value);
    }

    async function getUser() {
        try {

            const response = await axios.get('https://localhost:7211/api/v1/owner/owner-name/' + inputValue);

            setOwnerData(response.data.data);
            return response.data.data;

        } catch (error) {
            console.error(error);
        }
    }


    const mapData = async () => {
        const result = await getUser();
        var arrayLength = result.length;
        for (var i = 0; i < arrayLength; i++) {
            users2.push(result[i])
            //Do something
        }


        //console.log(users); // true
        console.log(users2); // true
    }


    return (
        <div>
            <button onClick={handleSubmit}>GetMe</button>
            <input type="text" name="ownerValue" onChange={handleOwnerChange}></input>

            <div>
                <div>
                    <h1>Get One Item From The List</h1>
                    {users2.map((user, index) => (
                        <div key={index}>
                            Name: {user.owner}, Age: {user.carmodel}
                        </div>
                    ))}
                </div>
            </div>
        </div>



    );
}

export default GetOneUser;
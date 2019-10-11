import React, {useEffect, useState} from 'react';
import axios from "axios";

function GetAxios (url) {
    const [item, setItem] = useState(0);
    useEffect(() => {
        axios
        .get(url)
        .then(response => {
            setItem(response.data);
        })
        .catch(error => {
            console.log("data was not returned", error);
        })
    }, [])
    console.log(item);
    return (item);
};

export default GetAxios;
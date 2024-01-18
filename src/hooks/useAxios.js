import { useState } from 'react';
import { v1 as uuid } from "uuid";
import axios from "axios";

const useAxios = (baseUrl) => {

    const [data, setData] = useState([]);

    const addData = async (url) => {
        const fullUrl = baseUrl + url;
        const response = await axios.get(fullUrl);
        setData(prevData => [...prevData, { ...response.data, id: uuid() }]);
    };

    return [data, addData];
}

export default useAxios;

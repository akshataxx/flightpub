import {useState, useEffect} from "react";
import ApiClient from "../api/apiClient";
import axios from "axios";

const useFetch = (url, tag)=> {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([false]);
    const [error, setError] = useState([false]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await ApiClient.get(url, {params:{tag:tag}} );
                    setData(res.data);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    }, [url, {params:{tag:tag}}]);


    const reFetch = async ()=> {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };
    return{data, loading, error, reFetch}
};
export default useFetch;
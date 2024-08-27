import { useEffect, useState } from "react";
import {fetchDataFromApi} from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState();

    const [error, setError] = useState(null);

    useEffect(() => {
        const makeApiCall = async () => {
            try {
                const res = await fetchDataFromApi(endpoint);
                setData(res);
            } catch (err) {
                setError(err);
            }
        };
        makeApiCall();
    }, [endpoint]);

    return { data, error };
};

export default useFetch;
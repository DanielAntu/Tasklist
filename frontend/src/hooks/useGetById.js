import { useState, useEffect, useCallback } from "react";
const api = "http://localhost:3333/task/";

const useGetById = (id) => {
    const [data, setData] = useState("");

    const getTask = useCallback(async () => {
        const res = await fetch(`${api}/get/${id}`);
        const task = await res.json();

        setData(task);
    }, [id]);

    useEffect(() => {
        getTask();
    }, [id, getTask]);

    return data;
};

export default useGetById;

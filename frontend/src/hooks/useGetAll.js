import { useEffect, useState } from "react";

const api = "http://localhost:3333/task/";

const useGetAll = () => {
    const [task, setTask] = useState();

    const getAll = async () => {
        const response = await fetch(`${api}getall`);
        const data = await response.json();

        setTask(data);
    };

    useEffect(() => {
        getAll();
    }, []);

    return task;
};

export default useGetAll;

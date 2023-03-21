const api = "http://localhost:3333/task/";

const useCreateTask = () => {
    const createTask = async (data) => {
        const addData = await fetch(`${api}create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ description: data }),
        });

        return addData;
    };

    return createTask;
};

export default useCreateTask;

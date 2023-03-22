const api = "http://localhost:3333/task/";

const useCreateTask = () => {
    const createTask = async (data) => {
        await fetch(`${api}create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
    };

    return createTask;
};

export default useCreateTask;

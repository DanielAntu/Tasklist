const api = "http://localhost:3333/task/";

const useEditTask = () => {
    const EditTask = async (data, id) => {
        await fetch(`${api}edit/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
    };

    return EditTask;
};

export default useEditTask;

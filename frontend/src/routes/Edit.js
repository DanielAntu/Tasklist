import styles from "./Edit.module.css";
import { useParams, useNavigate } from "react-router-dom";
import useGetById from "../hooks/useGetById";
import useEditTask from "../hooks/useEditTask";
import { useEffect, useState } from "react";

const Edit = () => {
    const [task, setTask] = useState("");
    const [state, setState] = useState("");
    const { id } = useParams();
    const res = useGetById(id);
    const EditTask = useEditTask();
    const navigate = useNavigate();

    useEffect(() => {
        setTask(res.description);
        setState(res.state);
    }, [res]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            description: task,
            state,
        };

        await EditTask(data, id);
        navigate("/");
    };

    return (
        <div className={styles.edit}>
            <h1>Edite a sua tarefa</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Tarefa:</span>
                    <input
                        type="text"
                        placeholder="Digite sua tarefa..."
                        onChange={(e) => setTask(e.target.value)}
                        defaultValue={task}
                    />
                </label>
                <label>
                    <span>Situação:</span>
                    <select
                        defaultValue={state}
                        onChange={(e) => setState(e.target.value)}
                    >
                        <option value="">{state}</option>
                        <option value="em andamento">Em andamento</option>
                        <option value="concluido">Concluido</option>
                    </select>
                </label>
                <input type="submit" value="Editar" />
            </form>
        </div>
    );
};

export default Edit;

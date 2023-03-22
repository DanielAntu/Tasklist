import Rows from "../components/Rows";
import styles from "./Home.module.css";
import useCreateTask from "../hooks/useCreateTask";
import useGetAll from "../hooks/useGetAll";
import { useState } from "react";

const Home = () => {
    const [description, setDescription] = useState([]);
    const createTask = useCreateTask();
    const tasks = useGetAll();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dbdata = {
            description,
        };

        await createTask(dbdata);

        setDescription("");

        window.location = "/";
    };

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Cadastre sua nova tarefa..."
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <input type="submit" value="Cadastrar" />
            </form>
            <div className={styles.container_table}>
                <table className={styles.table}>
                    <thead>
                        <tr className="bold">
                            <td>Tarefa</td>
                            <td>Situação</td>
                            <td>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks &&
                            tasks.map((task) => (
                                <Rows
                                    key={task._id}
                                    task={task.description}
                                    sit={task.state}
                                    id={task._id}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;

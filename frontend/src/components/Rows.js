import React from "react";
import { Link } from "react-router-dom";

const Rows = ({ task, sit, id }) => {
    const deleteTask = async (id) => {
        await fetch(`http://localhost:3333/task/delete/${id}`, {
            method: "DELETE",
        });

        window.location = "/";
    };

    return (
        <tr>
            <td>{task}</td>
            <td>{sit}</td>
            <td>
                <button onClick={() => deleteTask(id)} className="btn">
                    Deletar
                </button>
                <Link className="btn" to={`/edit/${id}`}>
                    Editar
                </Link>
            </td>
        </tr>
    );
};

export default Rows;

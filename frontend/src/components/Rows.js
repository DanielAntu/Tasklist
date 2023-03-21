import React from "react";
import { Link } from "react-router-dom";

const Rows = ({ task, sit, id }) => {
    return (
        <tr>
            <td>{task}</td>
            <td>{sit}</td>
            <td>
                <button className="btn">Deletar</button>
                <Link className="btn" to={`/edit/${id}`}>
                    Editar
                </Link>
            </td>
        </tr>
    );
};

export default Rows;

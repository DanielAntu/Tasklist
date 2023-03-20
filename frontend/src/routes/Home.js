import Rows from "../components/Rows";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div>
            <form className={styles.form}>
                <input type="text" placeholder="Cadastre sua nova tarefa..." />
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
                        <Rows task="Tomar Café" sit="Em andamento" />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;

import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <header>
                <h1>Task List</h1>
                <p>Aqui Esta suas Tarefas</p>
            </header>
        </div>
    );
};

export default Header;

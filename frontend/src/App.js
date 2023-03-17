import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Link to="/">Home</Link>
            <Link to="edit">Editar</Link>
            <h1>Task List</h1>
            <Outlet />
            <h1>footer</h1>
        </div>
    );
}

export default App;

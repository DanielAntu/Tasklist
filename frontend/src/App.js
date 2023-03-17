import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <p>nav</p>
            <h1>Task List</h1>
            <Outlet />
            <h1>footer</h1>
        </div>
    );
}

export default App;

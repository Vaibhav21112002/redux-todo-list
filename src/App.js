import "./App.css";
import Input from "./components/Input";
import Lists from "./components/Lists";
import { useSelector } from "react-redux";
function App() {
  const todo = useSelector((state) => state.todo);
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="d-grid">
        <Input />
        <h3 className="my-4">{todo.length === 0 ? "" : "Your Todo"}</h3>
        <Lists />
      </div>
    </div>
  );
}

export default App;

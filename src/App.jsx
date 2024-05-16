import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      date: "14-05-2024",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      date: "12-05-2024",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      date: "13-05-2024",
      isCompleted: false,
    },
  ]);
  return (<div>

<Outlet/>
</div>)

}

export default App

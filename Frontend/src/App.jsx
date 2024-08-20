import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Homepage}></Route>
        <Route path="/chat" Component={ChatPage}></Route>
      </Routes>
    </div>
  );
}

export default App;

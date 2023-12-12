import './App.css'
import Game from "./component/Game/index.jsx";
import Chrono from "./component/Chrono/index.jsx";
import Messages from "./component/Messages/index.jsx";

function App() {
    const MESSAGES = [
        { message : "React JS" },
        { message : "React Native" },
        { message : "Angular" },
        { message : "Symfony" },
        { message : "MongoDB" },
    ];

  return (
    <>
        <Messages messages={MESSAGES} />
    </>
  )
}

export default App
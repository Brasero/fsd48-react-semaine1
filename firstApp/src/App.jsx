import './App.css';
import Wrapper from "./component/Wrapper/index.jsx";
import Number from "./component/Number/index.jsx";

function App() {

  return (
    <>
        <Wrapper />
        <Number num={12} />
    </>
  )
}

export default App
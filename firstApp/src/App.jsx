import './App.css';
import CustomButtonClick from "./component/CustomButtonClick/index.jsx";

function App() {

  return (
    <>
        <CustomButtonClick value={2} />
        <CustomButtonClick />
        <CustomButtonClick value={5} />
    </>
  )
}

export default App
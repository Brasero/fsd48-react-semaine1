import './App.css'
import Students from "./component/Students/index.jsx";
import {useTheme} from "./utils/context/ThemeContext.jsx";

function App() {

    const {changeTheme} = useTheme()

  return (
    <>
        <button onClick={changeTheme}>Theme</button>
      <Students />
    </>
  )
}

export default App
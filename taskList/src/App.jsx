import './App.css'
import Form from "./component/Form/index.jsx";
import taskReducer, {initialState} from "./utils/reducer/taskReducer.js";
import {useReducer} from "react";
import Tasks from "./component/Tasks/index.jsx";

function App() {

    const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <>
      <div>
        <Form dispatch={dispatch} value={state.task} message={state.message} />
      </div>
      <div>
        <Tasks tasks={state.tasks} dispatch={dispatch} />
      </div>
    </>
  )
}

export default App
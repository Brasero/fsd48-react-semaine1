import './App.css'
import Students from "./component/Students/index.jsx";
function App() {
    const students = [
        { notes: [12, 11, 10], name: "Alan" },
        { notes: [18, 10, 19], name: "Alice" },
        { notes: [10, 9, 11], name: "Bernard" },
        { notes: [11, 17, 19], name: "Sophie" },
    ];

    const schoolName = "l'école du web"

  return (
    <>
        <Students students={students} schoolName={schoolName} />
    </>
  )
}

export default App
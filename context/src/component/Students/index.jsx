import Student from "../Student/index.jsx";
import {useStudent} from "../../utils/context/StudentContext.jsx";
import {useTheme} from "../../utils/context/ThemeContext.jsx";
import {useEffect} from "react";

function Students() {
    const {students} = useStudent()

    const {length} = students

    const {themeValue} = useTheme()

    useEffect(() => {
        console.log(themeValue)
    }, [])

    return (
        <div style={themeValue}>
            <h2>La classe comporte {length} étudiants</h2>
            {
                students.map((student, index) => {
                    return <Student student={student} key={`student-${index}`} />
                })
            }
        </div>
    )
}

export default Students
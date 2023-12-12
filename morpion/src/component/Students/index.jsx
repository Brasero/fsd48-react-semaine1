import Student from "../Student/index.jsx";

function Students({students, schoolName}) {

    const {length} = students

    return (
        <div>
            <h2>La classe comporte {length} étudiants</h2>
            {
                students.map((student, index) => {
                    return <Student student={student} schoolName={schoolName} key={`student-${index}`} />
                })
            }
        </div>
    )
}

export default Students
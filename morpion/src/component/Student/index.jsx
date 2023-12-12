
function Student({student, schoolName}) {
    const average = (student.notes.reduce((acc, current) => {
        return acc + current
    }, 0)) / student.notes.length

    return (
        <div style={{marginBottom: '50px'}}>
            <div>
                <span>Nom de l'élève : </span>
                <strong>{student.name}</strong>
            </div>
            <ul>
                <h3>Liste des notes</h3>
                {
                    student.notes.map((note, index) => {
                        return <li key={`note-${index}`}>{note} / 20</li>
                    })
                }
            </ul>
            <div>
                <span>Moyenne de l'élève : </span>
                <strong> {average.toFixed(2)} / 20</strong>
            </div>
            <div>
                {schoolName}
            </div>
        </div>
    )
}

export default Student
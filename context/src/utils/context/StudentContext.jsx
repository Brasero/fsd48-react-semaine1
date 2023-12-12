import {createContext, useContext} from "react";

const StudentContext = createContext()

const StudentContextProvider = ({children}) => {
    const state = useContext(StudentContext);

    const students = [
        { notes: [12, 11, 10], name: "Alan" },
        { notes: [18, 10, 19], name: "Alice" },
        { notes: [10, 9, 11], name: "Bernard" },
        { notes: [11, 17, 19], name: "Sophie" },
    ];

    const schoolName = "l'école du web"

    return (
        <StudentContext.Provider value={{students, schoolName}}>
            {children}
        </StudentContext.Provider>
    )
}

export const useStudent = () => {
    return useContext(StudentContext);
}

export default StudentContextProvider;
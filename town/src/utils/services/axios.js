import axios from "axios";

function useAxios() {

    const getTown = (name) => {
        return axios.get(`https://geo.api.gouv.fr/communes?nom=${name}`)
    }

    return {
        getTown
    }
}

export default useAxios
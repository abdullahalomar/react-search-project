import { useEffect, useState } from "react"

const useVoluntears = () => {
    const [voluntears, setVoluntears] = useState([]);
    useEffect(() => {
        fetch('voluntears.json')
            .then(response => response.json())
        .then(json => setVoluntears(json))
    }, [])
    
    return [voluntears, setVoluntears];
}

export default useVoluntears;
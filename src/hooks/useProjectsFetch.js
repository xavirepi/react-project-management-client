import { useEffect, useState } from 'react';
import { getAllProjects } from '../services/BaseService';

const useProjectsFetch = () => {
    const [state, setState] = useState({loading: true, projects: null})
    const {loading, projects} = state

    useEffect(() => {
        getAllProjects()
            .then(response => {
                setState({projects: response, loading: false})
            })
            .catch(err => console.log(err));
    }, [])

    return { loading, projects };
}

export default useProjectsFetch;
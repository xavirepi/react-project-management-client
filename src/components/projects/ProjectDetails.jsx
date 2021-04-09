import React, { useState, useEffect, useCallback } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { getOneProject } from '../../services/BaseService';
import SyncLoader from 'react-spinners/SyncLoader';

const ProjectDetails = () => {
    const { id } = useParams()
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
    }, [id])

    useEffect(() => {
        if (project) {
            setLoading(false)
        }
    }, [project])

    const fetchOneProject = useCallback(() => {
        getOneProject(id)
            .then(response => setProject(response))
            .catch(err => console.log(err))
    }, [id])

    useEffect(() => {
        if (loading) {
            fetchOneProject()
        }
    }, [loading, fetchOneProject])

    return (
        <div>
            {
                loading
                ? (
                    <div className="text-center">
                        <SyncLoader color="purple" />
                    </div>
                ) : (
                    <div>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <Link to={'/projects'}>Back to projects</Link>
                    </div>
                )
            }
        </div>
    )
}

export default ProjectDetails;
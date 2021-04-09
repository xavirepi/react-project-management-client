import React, { useState, useEffect, useCallback } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { getOneProject } from '../../services/BaseService';
import SyncLoader from 'react-spinners/SyncLoader';
import EditProject from './EditProject'

const ProjectDetails = () => {
    const { id, title } = useParams()
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

    const renderEditForm = () => {
        if (title) {
            fetchOneProject()
        } else {
            return <EditProject theProject={title} getTheProject={fetchOneProject} />
        }
    }

    return (
        <div>
            {
                loading
                ? (
                    <div className="text-center">
                        <SyncLoader color="purple" />
                    </div>
                ) : (
                    <div className="container">
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <div>{renderEditForm}</div>
                        <Link to={'/projects'}>Back to projects</Link>
                    </div>
                )
            }
        </div>
    )
}

export default ProjectDetails;
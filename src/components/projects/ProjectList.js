import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import { Link } from 'react-router-dom';
import useProjectsFetch from '../../hooks/useProjectsFetch';
import AddProject from './AddProject';

const ProjectList = () => {
    const { loading, projects } = useProjectsFetch()
    
    return (
        <div>
            {
                loading
                    ? (
                        <div className="text-center">
                            <SyncLoader color="blue"  />
                        </div>
                    ) : (
                        <>
                        <div>
                            <AddProject getData={() => this.getAllProjects()}/>
                        </div>
                        <div className="mt-4 text-left container">
                            <h3>Projects Created</h3>
                        { 
                            projects.map(project => {
                                return (
                                    <div key={project._id}>
                                        <Link to={`/projects/${project._id}`}>
                                            <h5>{project.title}</h5>
                                        </Link>
                                        <p>{project.description} </p>
                                    </div>
                                )})
                        }
                        </div>
                        </>
                    )
            }
        </div>
    )
}

export default ProjectList;
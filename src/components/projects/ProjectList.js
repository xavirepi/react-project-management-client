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
                        <div style={{width: '60%', float:"left"}}>
                        { 
                            projects.map(project => {
                                return (
                                    <div key={project._id}>
                                        <Link to={`/projects/${project._id}`}>
                                            <h3>{project.title}</h3>
                                        </Link>
                                        {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
                                    </div>
                                )})
                        }
                        </div>
                        <div style={{width: '40%', float:"right"}}>
                            <AddProject getData={() => this.getAllProjects()}/> {/* <== !!! */}
                        </div>
                        </>
                    )
            }
        </div>
    )
}

export default ProjectList;
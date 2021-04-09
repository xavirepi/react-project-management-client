import React, { useState } from 'react';
import { createProject } from '../../services/BaseService';
//import axios from 'axios';

const AddProject = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('prevPost:', title, description)

        createProject({title, description})
            .then(() => {
                setTitle('')
                setDescription('')
            })
            .catch(err => console.log(err));
    }

    const onChange = (e) => {
        const { name, value } = e.target

        if (name === 'title') {
            setTitle(value)
        } else if (name === 'description') {
            setDescription(value)
        }
    }

    return (
        <div>
            <h1>Create new project</h1>
            <form className="container" onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input className="form-control" type="text" name="title" value={title} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea className="form-control" name="description" value={description} onChange={onChange} />
                </div>
            
                <button className="btn btn-primary" type="submit" >Create</button>
            </form>
        </div>
    )
}

export default AddProject
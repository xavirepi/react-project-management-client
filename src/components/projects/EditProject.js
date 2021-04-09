import React from 'react';
//import { updateOneProject } from '../../services/BaseService';
import { useState } from 'react';
import { updateOneProject } from '../../services/BaseService';
import { useParams } from 'react-router-dom';

const EditProject = () => {
    const { title, description } = useParams()
    const [title, setTitle] = useState(title)
    const [description, setDescription] = useState(description)

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('prevProject:', title, description)

        updateOneProject({title, description})
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

    return(
        <div>
            <hr />
            <h3 className="text-center">Update Project</h3>
            <form className="container" onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" name="title" value={title} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea name="description" value={description} onChange={onChange} />
                </div>
                <div className="form-group">
                <button className="btn btn-primary" type="submit" >Update</button>
                </div>
            </form>
      </div>
    )
}

export default EditProject;
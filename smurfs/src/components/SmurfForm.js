import React, { useState, useContext } from 'react';
import  SmurfContext  from '../contexts/SmurfContext';

const SmurfForm = () => {
    const { addSmurf } = useContext(SmurfContext);
    const [ smurf, setSmurf ] = useState({
        name: '',
        age: '',
        height: '',
        id: ''
    });

    const handleChanges = e => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value,
            id: Date.now()
        });
    }
    const handleSubmitSmurfForm = e => {
        e.preventDefault();
        addSmurf(smurf);
    }

    return (
        <div>
            <form>
                <label>
                    <input
                    placeholder='name'
                    type='text'
                    name='name'
                    onChange={handleChanges}
                    />
                    <input
                    placeholder='height'
                    type='text'
                    name='height'
                    onChange={handleChanges}
                    />
                    <input
                    placeholder='age'
                    type='text'
                    name='age'
                    onChange={handleChanges}
                    />
                    <button
                    onClick={handleSubmitSmurfForm}
                    className='add-smurf-button'>
                        Add a new smurf to the village!
                        </button>
                </label>
            </form>
        </div>
    )
}
export default SmurfForm;






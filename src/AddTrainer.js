import React, {useState} from "react";

const AddTrainer = ({addTrainer}) => {
    const [name, setName] = useState('');

    const submit = async(event) => {
        event.preventDefault()
        addTrainer(name);
    }

    return(
        <div>
            <h1>New Trainer</h1>
            <hr/>
            <form onSubmit={submit}>
                <label>
                    Name:
                    <input type="text" onChange={ev => setName(ev.target.value)} />
                </label>
                <button type="submit">Create New Trainer!</button>
            </form>
        </div>
    )
}

export default AddTrainer
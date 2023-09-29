import React, {useState} from "react";

const AddPokemon = ({addPokemon}) => {
    const [name, setName] = useState('');

    const submit = async(event) => {
        event.preventDefault()
        addPokemon(name);
    }

    return(
        <div>
            <h1>New Pokemon</h1>
            <hr/>
            <form onSubmit={submit}>
                <label>
                    Name:
                    <input type="text" onChange={ev => setName(ev.target.value)} />
                </label>
                <button type="submit">Create New Pokemon!</button>
            </form>
        </div>
    )
}

export default AddPokemon
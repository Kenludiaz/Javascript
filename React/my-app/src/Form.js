import React, { useState } from 'react'

// const Form = () => {
//     render
// }\
class Form extends React.Component {
    constructor() {
        super()
    }


    render() {
        return(
        <form>
            <label>
            Name:
            <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" onClick={alert("Sucess")}/>
        </form> 
        )
    }
}

export default Form
import React from "react"
import "./Form.scss"

const Form = () => {
    return <div className="body">
        <h2>Simpe Form component</h2>
        <input type="email" placeholder="Enter Email-id" />
        <input type="password" placeholder="Enter password" />
        <button type="submit">Submit</button>
    </div>
}

export default Form
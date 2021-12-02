import React from 'react'
import "./input.css"
const Input = () => {
    return (

        <form className="form-inline">
            <div className="form-group">
                <label>Paragraphs</label>

                <div >
                    <input className="number" type="number"></input>
                </div>
            </div>
            <div className="form-group">
                <label>Include HTML</label>

                <div>
                    <select className="select">
                        <option value="html">Yes</option>
                        <option value="text">No</option>
                    </select>
                </div>
            </div>


        </form>


    )
}

export default Input

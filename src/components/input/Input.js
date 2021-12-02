import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCount } from '../../redux/paragraphsSlice'
import "./input.css"
const Input = () => {

    const items = useSelector(state => state.paragraphs.items)
    const count = useSelector(state => state.paragraphs.count)

    const dispatch = useDispatch();

    const handleChange = (number) => {

        dispatch(changeCount(number))
    }

    return (

        <form className="form-inline">
            <div className="form-group">
                <label>Paragraphs</label>

                <div >
                    <input className="number" type="number" value={count} onChange={(e) => handleChange(e.target.value)} ></input>
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

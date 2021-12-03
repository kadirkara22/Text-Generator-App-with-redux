import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCount, changeHtml } from '../../redux/paragraphsSlice'
import "./input.css"
const Input = () => {

    const items = useSelector(state => state.paragraphs.items)
    const count = useSelector(state => state.paragraphs.count)
    const html = useSelector(state => state.paragraphs.html)


    const dispatch = useDispatch();

    const handleChange = (number) => {

        dispatch(changeCount(number))
    }
    const handleHtml = (item) => {

        dispatch(changeHtml(item))
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
                    <select className="select" value={html} onChange={(e) => handleHtml(e.target.value)}>
                        <option value="text">No</option>
                        <option value="html">Yes</option>
                    </select>
                </div>
            </div>


        </form>


    )
}

export default Input

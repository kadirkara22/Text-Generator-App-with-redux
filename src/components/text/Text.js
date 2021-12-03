import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeHtml, firstPage, showPram } from '../../redux/paragraphsSlice';
import "./text.css"
const Text = () => {
    const items = useSelector(state => state.paragraphs.items)
    const count = useSelector(state => state.paragraphs.count)
    const html = useSelector(state => state.paragraphs.html)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(firstPage())
    }, [dispatch])


    useEffect(() => {
        dispatch(showPram())
    }, [dispatch, count])



    return (
        <div className="paragraf">

            {
                html === "text" ?
                    items.map(item => (

                        <span key={item.id} className="text">
                            {item.paragraph}
                        </span>
                    ))
                    :
                    items.map(item => (

                        <span key={item.id} className="text">
                            {`<p>${item.paragraph}</p>`}
                        </span>
                    ))


            }

        </div>
    )
}

export default Text

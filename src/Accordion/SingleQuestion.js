import React from 'react'
import "./Accordion.css"
import { FaPlus, FaMinus } from 'react-icons/fa';;

function SingleQuestion(props) {
    const [isOpen, setIsOpen] = React.useState(false);
    console.log("singlquestion props: ", props);
    return (
        <article className='accordion-question'>
            <header className='accordion-header'>
                <h3 className='accordion-title'>{props.title}</h3>
                <button className='accordion-btn' onClick={() => setIsOpen(prevState => !prevState)}>
                    {isOpen ? <FaMinus className='color'/> : <FaPlus className='color' /> }  
                </button> 
            </header>
            {isOpen && <footer className='accordion-footer'>{props.info}</footer>}
        </article>
    )
}

export default SingleQuestion
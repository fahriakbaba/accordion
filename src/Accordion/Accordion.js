import React from 'react'
import data from "./accordion-data";
import SingleQuestion from './SingleQuestion';
import "./Accordion.css"

function Accordion() {
  const [items, setItems] = React.useState(data);

  console.log(data);

  return (
    <section className='section-container'>
      <h1>questions and answers about login</h1>
      {
        items.map(item => <SingleQuestion key={item.id} {...item} />)
      }
    </section>
  )
}

export default Accordion
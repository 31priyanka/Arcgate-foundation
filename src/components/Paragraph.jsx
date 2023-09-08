import React from 'react'
import '../components/Paragraph.css';

const Paragraph = ({heading , heading3 ,  paragraph}) => {
  return (
    <div>
      <h2 className='heading'>{heading}</h2>
      <h3 className='heading3'>{heading3}</h3>
      <p className='paragraph'>{paragraph}</p>
    </div>
  );
};



export default Paragraph;
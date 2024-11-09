import React from 'react';
import './Heading.css';

interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({title}) => {
  return (
    <div className='heading-container'>
      <p className='heading-text'>{title}</p>
    </div>
  );
}

export default Heading;

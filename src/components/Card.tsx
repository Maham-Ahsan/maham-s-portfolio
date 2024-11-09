import React from 'react';
import Image from 'next/image';
import './Card.css';

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className='card-container' data-aos="zoom-in-up">
      <div className='image-container'>
        <Image
          className='image'
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>
      <div className='content'>
        <div className='title'>{title}</div>
        <div className='description'>{desc}</div>
        <div className='tags-container'>
          {tags.map((el) => (
            <div className='tag' key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

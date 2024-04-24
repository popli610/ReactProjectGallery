import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './styles.css'

const StarRating = ({numOfStars=5}) => {
  const [hover,setHover]= useState('')
  const [rating,setRating] = useState('')
  const handleOnClick = (id) =>{
    setRating(id)
  }
  const handleOnMove = (id) =>{
    setHover(id)
  }
  const handleOnLeave = () =>{

  }
  return (
    <div className='star-rating'>
      {[...Array(numOfStars)].map((_,index) =>{
        return (
          <FaStar
            key={index}
            onClick={() => {handleOnClick(index)}}
            onMouseMove={() => {handleOnMove(index)}}
            onMouseLeave={() => {handleOnLeave()}}
            className={index<= rating|| index<=hover ?'active':'inactive'}
            size={40}
          />
        );
      })}
    </div>
  )
}

export default StarRating

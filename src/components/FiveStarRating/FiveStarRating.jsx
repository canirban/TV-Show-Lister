import React from 'react'
import { StarFill, StarHalf, Star as StarEmpty } from 'react-bootstrap-icons'
const FiveStarRating = ({rating}) => {

    const starList = []

    const starFillCount = Math.floor(rating)

    const hasHalfStar = rating - parseInt(rating) >= 0.5

    const emptyStar = 5 - starFillCount - (hasHalfStar?1:0)

    for(let i=1;i<=starFillCount;i++) starList.push(<StarFill key={'star-full'+i}/>)
    if(hasHalfStar) starList.push(<StarHalf  key={'star-half'}/>)
    for(let i=1;i<=emptyStar;i++) starList.push(<StarEmpty  key={'star-empty'+i}/>)

  return (
    <>
    {starList}
    </>
  )
}

export default FiveStarRating
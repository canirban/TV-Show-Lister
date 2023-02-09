import React from 'react'
import { MAX_TITLE_CHAR, SMALL_BACKDROP_BASE_URL } from '../../config'
import s from './TvShow.module.css'


const TvShowListItem = ({tvShow, onClick}) => {

    const onClick_ = () =>{
        onClick(tvShow)
    }

  return (
    <div onClick={onClick_} className={s.container}>
        <img className={s.img} src={SMALL_BACKDROP_BASE_URL+tvShow.backdrop_path} alt={tvShow.name}/>
        <div className={s.title}>{tvShow.name.length>MAX_TITLE_CHAR?tvShow.name.slice(0,MAX_TITLE_CHAR)+' ...':tvShow.name}</div>
    </div>
  )
}

export default TvShowListItem
import React, { useEffect, useState } from 'react'
import { TVShowAPI } from './api/tv-show';
import Logo from './components/Logo/Logo';
import TvShowDetail from './components/TvShowDetail/TvShowDetail';
import { BACKDROP_BASE_URL } from './config';
import s from './style.module.css'
import logoImg from './assets/images/logo.png'
import TvShowList from './components/TvShowList/TvShowList';
import SearchBar from './components/SearchBar/SearchBar';

export const App = () => {

    const [currTVShow, setCurrTVShow] = useState();
    const [recommendationList, setRecommendationList] = useState([]);

    const fetchPopular = async () =>{
        try{
            const resp = await TVShowAPI.fetchPopular()
            if(resp.length>0)
            setCurrTVShow(resp[0])
        }catch(e){

        }
       
    }

    const fetchRecommendation = async (tvShowId) =>{
       try{
        const resp = await TVShowAPI.fetchRecommendations(tvShowId)
        if(resp.length>0)
       setRecommendationList(resp)
       }catch(e){}
    }

    const fetchByTitle = async (title) =>{
        try{
            console.log(title)
            const resp = await TVShowAPI.fetchByTitle(title)
            if(resp.length>0)
            setCurrTVShow(resp[0])
        }catch(e){

        }
    }

    const updateCurrentTvShow = async (tvShow) =>{
        
        setCurrTVShow(tvShow)
    }

    useEffect(()=>{
        fetchPopular();
    },[]);

    useEffect(()=>{
        if(currTVShow)
        fetchRecommendation(currTVShow.id)

        
    },[currTVShow]);

  return (
    <div className={s.main_container} style={{
        background: currTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}>
        <div className={s.header}>
            <div className='row'>
                <div className='col-4'>
                <Logo img={logoImg} title={"W2W"} subtitle={"Find a show you may like"}/>
                </div>
                <div className='col-md-12 col-lg-4'>
                    <SearchBar onSubmit={fetchByTitle}/>
                </div>
            </div>
        </div>
        <div className={s.tv_show_detail}>{currTVShow && <TvShowDetail tvShow={currTVShow}/>}</div>
        <div className={s.recommended_tv_shows}>
        {currTVShow && <TvShowList onClick={updateCurrentTvShow} tvShowList={recommendationList}/>}
        </div>
    </div>
  )
}

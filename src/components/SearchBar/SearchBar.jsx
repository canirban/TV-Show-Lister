import React from 'react'
import { Search as SearchIcon } from 'react-bootstrap-icons'
import s from './SearchBar.module.css'

const SearchBar = ({onSubmit}) => {

    const onSubmit_ = (e)=>{
        if(e.key==='Enter' && e.target.value.trim()!=='')
        onSubmit(e.target.value)
    }

  return (
    <>
    <SearchIcon size={27} className={s.icon} />
    <input onKeyUp={onSubmit_} className={s.input} type='text' placeholder='Search a tv show'/>
    </>
  )
}

export default SearchBar
import React, { useEffect, useState } from 'react'
import './RawPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../constants/Constants'

function RawPost(props) {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(props.url).then(response=>{
      setMovies(response.data.results)
    })
  }, [])
  
  return (
    <div className='raw'>
        <h2>{props.title}</h2>
        <div className="posters">

          {movies.map((obj)=>
            <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )}
            
        </div>
    </div>
  )
}

export default RawPost
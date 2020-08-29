import React, { useState, useEffect} from 'react'
import './Reasults.css'
import VideoCard from './VideoCard'
import axios from './axios'
import FlipMove from 'react-flip-move';

function Reasults({ selectedOption }) {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(selectedOption)
           setMovies(request.data.results);
           return request;
        }
        fetchData()
    }, [selectedOption]);

    return (
        <div className="reasults">
        <FlipMove>
            {movies && movies.map(movie =>(
                <VideoCard key={movie.id} movie={movie}/>
            ))}
        </FlipMove>
        </div>
    )
}

export default Reasults

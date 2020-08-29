import React, { forwardRef } from 'react'
import './VideoCard.css'
import TextTruncate from 'react-text-truncate'; // recommend
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const baseURL ="https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie },ref)=>{
    return (
        <div ref={ref} className="videoCard">
            <img 
            src={`${baseURL}${movie.backdrop_path}`}
            alt=""/>
            <small>Relese Date: {movie.release_date}</small>
            <h2>{movie.title}</h2>
            <TextTruncate 
                line={2}
                element="div"
                truncateText="…"
                text={movie.overview}
            />
            <p> <ThumbUpIcon/>&nbsp; {movie.vote_count} </p>
        </div>
    )
})

export default VideoCard


import React ,{forwardRef} from 'react'
import "./Detail.css";
import VideoPlayer from "react-video-js-player";

const Detail =forwardRef(({ price, media, description}, ref) => {

    const mediaSrc = process.env.PUBLIC_URL + media;

    


    
    return (
            <div className="detail" ref={ref}>
                <div>    
                {mediaSrc.includes(".mp4")?<VideoPlayer src={mediaSrc} height="480p" width="720p" />:<img src={mediaSrc} alt="this is picture"/>} 
                <h3> price ${price}</h3>
                <p>{description}</p>
                </div> 
           </div>
    )
})

export default Detail

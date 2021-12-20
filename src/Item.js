import React ,{forwardRef, useState} from 'react'
import "./item.css";
import Detail from "./Detail";
import p1 from "./Logo/p1.png"
import p3 from "./Logo/p3.jpeg"
const Item =forwardRef(({ name, brand_logo, stock, price, media, description }, ref) => {

    const [state, setState] = useState(false);
    
    
   console.log(ref)
    return (
        <div className={state? "itemDetailView": "Item"} ref={ref}>
            {state ? <div>
            <div className="list">
                <div className="innerListItem">
                <h5>Company name : {name}</h5>
                <img className="logo" src={process.env.PUBLIC_URL + brand_logo} alt='"this is a logo"'/>
                <p className={stock > 10 ?"StockGreen":"StockRed"} style={{fontWeight:500}}>In stock : {stock}</p>
                
                </div>
                <button className = {state? "greenButton": "whiteButton"}  onClick={() => setState(!state)} >Back</button>
            </div>

            <div className="detail">
                
                <Detail price={price} media={media} description={description} />
           </div> 
           </div>:
           <div>
            <div className="list">
                <div className="innerListItem">
                <h5>Company name : {name}</h5>
                <img className="logo" src={process.env.PUBLIC_URL + brand_logo} alt='"this is a logo"'/>
                <p className={stock > 10 ?"StockGreen":"StockRed"} style={{fontWeight:200}}>In stock : {stock}</p>
                {media.includes(".mp4")?<img className="mediaLogo" src={process.env.PUBLIC_URL + p3} alt="video icon"/>:<img className="mediaLogo" src={process.env.PUBLIC_URL + p1} alt="image icon"/>}
                </div>
                <button className = {state? "greenButton": "whiteButton"} onClick={()=>setState(prevState=> !prevState)} >Detail</button>
            </div>
           </div>}
        </div>
    )
})

export default Item

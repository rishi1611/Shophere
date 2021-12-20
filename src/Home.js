import React, { Component } from 'react'



export default class Home extends Component {
    render() {
        return (
            <div class="Home">
                <h3>{Name}</h3>
                <h3>{price}</h3>
                <img src={picture}/>
                <p>{stock}</p>
                <p>{description}</p>
            </div>
        )
    }
}

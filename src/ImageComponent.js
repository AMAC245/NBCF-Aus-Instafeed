import React, { Component } from 'react'

export default class ImageComponent extends Component {
    
    render() {
        const { images } = this.props
        return(
            <div className="image-container">
                <div className="user-details">
                    <img src={images.user.profile_picture} id="avatar"></img>
                    <p>{images.user.username}</p>
                    <button>SUPPORT</button>
                </div>

                <div className="image-details">
                    <img src={images.images.thumbnail.url} id="frame"></img>
                    <p>{`${images.likes.count} likes`}</p>
                    <p>
                        <span>{images.user.username}</span> 
                        {images.caption.text}
                    </p>
                    
                </div>
            </div>
        )
    }
}

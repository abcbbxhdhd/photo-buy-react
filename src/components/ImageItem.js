import React, {useContext} from "react"

function ImageItem(props) {
    

    return (
        <div className="img--item">
            <img className="image" src={props.src}/>
            <i onClick={props.toggleFavorite} className={props.isFavorite? "ri-heart-fill" : "ri-heart-line"}></i> 
            <i onClick={props.addImage} class="ri-add-circle-line"></i> 
        </div>
    )
}

export default ImageItem
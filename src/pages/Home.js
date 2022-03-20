import React, { useContext } from "react"
import ImageDetail from "../components/ImageItem"
import {ImageContext} from "../context/imageContext"

function Home() {
    const {images, toggleFavorite, addImage} = useContext(ImageContext)

    const imagesToRender = images.map(image => {
        return (
            <ImageDetail id={image.id} key={image.id} src={image.url} isFavorite={image.isFavorite} toggleFavorite={() => toggleFavorite(image.id)} addImage={() => addImage(image.id)}/>
        )
    })

    return (
        <div className="img--grid">
            {imagesToRender}
        </div>
    )
}

export default Home
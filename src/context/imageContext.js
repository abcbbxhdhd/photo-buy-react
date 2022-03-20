import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

const ImageContext = createContext()

function ImageContextProvider({children}) {
    const [images, setImages] = useState([])
    const [cart, setCart] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(async () => {
        const response = await axios.get(url)
        setImages(response.data)
    }, [])

    function toggleFavorite(id) {
        setImages(prevImages => prevImages.map(image => {
            if (image.id === id) {
                return {
                    ...image,
                    isFavorite: !image.isFavorite
                }
            }
            return {...image}
        }))
    }

    function addImage(id) {
        const imageToAdd = images.filter(image => image.id === id)[0]
        setCart(prevCart => [...prevCart, imageToAdd])
    }

    function removeImage(id) {
        const clearedImages = cart.filter(image => image.id !== id)
        setCart(clearedImages)
    }

    function emptyCart() {
        setCart([])
    }

    return (
        <ImageContext.Provider value={{
            images,
            cart,
            addImage,
            removeImage,
            toggleFavorite,
            emptyCart
        }}>
            {children}
        </ImageContext.Provider>
    )

}

export {ImageContextProvider, ImageContext}
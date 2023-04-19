import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { PhotosChilds } from './PhotosChilds'
import { getPhotos } from "../store/slices/photos/thunks"

import './PhotoParent.css'

export const PhotoParent = () => {
    const { photos } = useSelector(state => state.photos)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPhotos())
    }, [])

    const otherPage = () => dispatch(getPhotos())

  return (
    <div className='PhotoParent'>
        {
        photos?.map( photo => (<PhotosChilds key={photo.id} albumId={photo.albumId} title={photo.title} url={photo.url} />))
        }
        <button onClick={otherPage}>Ver mas</button>
    </div>
  )
}

import React from 'react'
import './PhotosChilds.css'

export const PhotosChilds = ({albumId, title, url}) => {
  return (
    <div className='PhotosChilds'>
        <img src={url} />
        <div>
            <h3>{title}</h3>
            <p>{albumId}</p>
        </div>
    </div>
  )
}

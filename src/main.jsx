import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { PhotosApp } from './components/PhotosApp'
import './index.css'

import {store} from './store/store' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PhotosApp />
  </Provider>,
)

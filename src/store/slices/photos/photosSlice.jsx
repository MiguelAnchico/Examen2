import { createSlice } from '@reduxjs/toolkit'

export const photosSlice = createSlice({
    name: 'photos',
    initialState:{ 
        isLoading: false,
        photos: [],
        page: 0,
    },
    reducers: {

        startLoading: (state, action) => {
            state.isLoading = true;
        },

        setPhotos: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.photos = action.payload.photos;
        }
    }
})

export const { startLoading, setPhotos } = photosSlice.actions
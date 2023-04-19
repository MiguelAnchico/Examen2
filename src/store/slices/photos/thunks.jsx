import { setPhotos, startLoading } from './photosSlice'

export const getPhotos = ( page = 1 ) => {
    return async (dispatch, getState) => {
        dispatch( startLoading());

        const url = 'https://jsonplaceholder.typicode.com/photos'
        const resp = await fetch(url);
        const data = await resp.json();

        dispatch( setPhotos(
            {
                photos: data.slice(0, page * 20),
                page: page + 1
            }
        ));
    }
}
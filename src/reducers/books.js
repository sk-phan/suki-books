import { createSlice } from "@reduxjs/toolkit";

const books = createSlice({
    name: 'books',
    initialState: {
        items: null
    },

    reducers: {
        setBooks: (state, action) => {
            const shortenList = action.payload.slice(0,20)
            state.items = shortenList
            console.log(state.items)
        }

    }
})

export const fetchBook = () => {
    return (dispatch, getState) => {
            fetch('https://express-deploy2.herokuapp.com/books/highRating')
            .then(res => res.json())
            .then(data => dispatch(books.actions.setBooks(data.data)))
          
    }
}

export default books
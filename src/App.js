import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import books from 'reducers/books';
import Books from 'components/Books';

const reducer = combineReducers({
  books: books.reducer
});

const store = configureStore({reducer})

export const App = () => {

  return (

    //We use React Router to switch between different sections. 
    //Run redux toolkit
    //Fetch api and loading state
    //display the book and search bar
    <Provider store={store}>
      <Books />
    </Provider>
    
 
  )
}

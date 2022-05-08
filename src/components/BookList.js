import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';


const Container = styled.div`
    display: flex; 
    flex-direction: row;
    overflow-x: auto;
    column-gap: 2rem;
`

const BookWrapper = styled.div`
    border: solid 1px #295510;
    padding: 2rem;
    position: relative;
    border-radius: 5px;

    &::after {
        content: '';
        width: 7px;
        height: 100%;
        position: absolute;
        background-color: #295510;
        top: 0;
        left: 0px;
    }
`
const BookTitle = styled.p`
    font-size: 1.4rem;
    color: #295510;
    width: 115px;
    height: 140px;
    font-weight: 600;
`

const BookAuthor = styled.p`
    color: #394631;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.2;
    position: relative;
`


const BookList = () => {

    const bookData = useSelector(state => state.books.items);

    return(
       <Container>
           {bookData && bookData.map(item => (
               <BookWrapper key={item.bookID}>
                    <BookTitle>{item.title}</BookTitle>
                    <BookAuthor>. {item.authors}</BookAuthor> 
               </BookWrapper>
               
           ))}
       </Container>
    )
}

export default BookList
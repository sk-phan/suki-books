import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBook } from "reducers/books";
import styled from 'styled-components';
import BookList from "./BookList";
import { MdSearch } from 'react-icons/md';


const Background = styled.div`
    height: 100vh;
    width: 375px;
    padding: 4.8rem 2.4rem 4.8rem 3.2rem;
    background: #F8E8BA;
    position: relative;

`

const Heading = styled.h1`
    font-weight: 700;
    font-size: 2.8rem;
    color: #295510;
    margin-bottom: 3.2rem;
    padding-bottom: 1rem;
    font-family: 'Playfair Display', serif;
 
`

const SearchBar = styled.div`
    width: 100%;
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    border: solid 1px #295510;
    border-radius: 40px;
    position: relative;
`

const SearchInput = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: transparent;
    border: transparent;
    padding: 1rem;
    outline: none;
    width: 90%;
    padding-left: 1rem;
    color: #295510;
    font-size: 1.4rem;
`
const SearchBtn = styled.button`
    border: none;
    width: 3.2rem;
    height: 3.2rem;
    position: absolute;
    border-radius: 50%;
    right: 2px;
    background-color: #295510;
`

const SearchIcon = styled(MdSearch)`
    width: 2.4rem;
    height: 2.4rem;
    color: #F8E8BA;

`


const Books = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    dispatch(fetchBook())


    useEffect(() => {
        fetch(`https://express-deploy2.herokuapp.com/books?title=${search}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[search])

    return(
        <Background>
            <Heading>Explore new books</Heading>
            <SearchBar>
                <SearchInput 
                type='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                /> 
                <SearchBtn type='search'><SearchIcon/></SearchBtn>
            </SearchBar>
            <BookList />
        </Background>
    )
}

export default Books
import React from 'react'
import { useState, useEffect } from 'react';
import { InputBase, Box, List, ListItem, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background : #fff;
    // width : 38%;
    border-radius : 2px;
    margin-left : 10px;
    display : flex;
`

const InputSearchBase = styled(InputBase)`
    padding-left : 20px;
    width : 100%;
    font-size : unset;
`

const SearchIconWrapper = styled(Box)`
    // color : blue;
    padding : 5px;
    display : flex;
    cursor : pointer;
`;

// const ListWrapper = styled(List)`
// position: absolute;
// background: #FFFFFF;
// color: #000;
// margin-top: 36px;
// `

function SearchFriend() {

  const [text, setText] = useState('');

  const getText = (text) => {
      setText(text);
  }

  return (
    <SearchContainer>
      <InputSearchBase 
          placeholder='Search username'
          onChange={(e) => getText(e.target.value)}
          value={text}
      />
      <SearchIconWrapper>
          <SearchIcon />
      </SearchIconWrapper>
      {/* {
          text && 
          <ListWrapper>
              {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLocaleLowerCase())).map(product => (
                      <ListItem>
                          <Link to = {`/product/${product.id}`}
                          onClick={() => setText('')}
                          style={{ textDecoration: 'none', color: 'inherit'}}>
                          {product.title.longTitle}
                          </Link>
                      </ListItem>
                  ))
              }
          </ListWrapper>
      } */}
    </SearchContainer>
  )
}

export default SearchFriend
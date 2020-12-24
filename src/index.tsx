import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import * as color from './color'
import { GlobalStyle } from './GlobalStyle'
import { App } from './App'


const Logo = styled.div`
    height: 100%;
    padding: 16px 0;
    overflow-y: auto;
`

const CardFilter = styled.input`
    display: flex;
    align-items: center;
    min-width: 300px;
    border: solid 1px ${color.Silver};
    border-radius: 3px;
`


const Column = styled.div`
    display: flex;
    flex-flow: column;
    width: 355px;
    height: 100%;
    border: solid 1px ${color.Silver};
    border-radius: 6px;
    background-color: ${color.LightSilver};

    >:not(:last-child) {
        flex-shrink: 0;
    }
`

const ColumnHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px;
`

const Card = styled.div`
    position: relative;
    border: solid 1px ${color.Silver};
    border-radius: 6px;
    box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
    padding: 8px 32px;
    background-color: ${color.White};
    cursor: move;
`

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>, 
    document.getElementById('app')
)

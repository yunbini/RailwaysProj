import React, { useCallback,useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';


const StyledDiv = styled.div`
    width:592px; height:513px;
    box-sizing: border-box;
    border-radius:14px;
    border-top: 63px solid #509AD1;
    display:inline-block;
    margin:5px;
    position:relative;
    font-family:var(--font-bold);
    cursor:pointer;
`
const StyledText = styled.p`
    font-size:22px; color:#FFFFFF;
    position:absolute;
    top:-45px;
    left:37px;
    margin:0;
`
const MainImg = styled.img`
    width:592px; height:450px;
`
function ResultBox({text}){


    return(
        <StyledDiv>
           <StyledText>{text}</StyledText>
           <MainImg src={text}></MainImg>
        </StyledDiv>
    )
}
export default ResultBox;
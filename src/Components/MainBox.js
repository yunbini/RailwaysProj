import styled from "styled-components";

const StyledDiv = styled.div`
    width:592px; height:513px;
    box-sizing: border-box;
    border-radius:14px;
    border-top: 63px solid #509AD1;
    display:inline-block;
    margin:5px;
    position:relative;
    font-family:var(--font-bold);
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
function MainBox({text,ImgBox}){
    return(
        <StyledDiv>
           <StyledText>{text}</StyledText>
           <MainImg src={ImgBox}></MainImg>
        </StyledDiv>
    )
}
export default MainBox;
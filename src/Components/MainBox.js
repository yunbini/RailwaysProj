import React, { useCallback,useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from "styled-components";
import axios from 'axios';
import {useSelector,useDispatch} from "react-redux";
import ResultBox from './ResultBox';


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
function MainBox({text,firstImg,secImg}){

    // let result = useSelector((state) => ({
    //     // checkedMenus: state.checkedMenus,
    //     // orderPrice: state.orderPrice,
    //     // orderAmount: state.orderAmount
    //     result: state.result
        
    // }));

    // let dispatch = useDispatch();

    const onDrop = useCallback(async(acceptedFiles) => {
        console.log(acceptedFiles); // 업로드된 파일 리스트
        // 파일을 서버로 전송하거나, 로컬에 미리보기로 표시할 수 있습니다.
        const formData = new FormData();
        acceptedFiles.forEach(file => {
            formData.append('file', file);
        });

        try {
            const response = await axios.post('https://sozerong.pythonanywhere.com/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
            alert('파일 업로드 성공');
            // dispatch(complete());
        } catch (error) {
            console.error(error);
            alert('파일 업로드 실패');
            // dispatch(disorder());
        }
    }, []);
    
      

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' });

    return(
        <StyledDiv {...getRootProps()}>
           <StyledText>{text}</StyledText>
           {isDragActive ? (
                <MainImg src={secImg}></MainImg>
           ):(
                <MainImg src={firstImg}></MainImg>
           )}
           {/* <MainImg src={beforeImg}></MainImg> */}
        </StyledDiv>
           
    )
}
export default MainBox;
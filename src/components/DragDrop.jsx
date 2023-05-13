import React, { useState, useRef } from 'react';
import { styled } from 'styled-components';

function DragDrop(props) {
    const [dragActive, setDragActive] = useState(false)
    const inputRef = useRef();

    const handleFile = (files) => {
        alert("#### num of files,"+files.length)
        // 파일 길이 체크 로직
        // 최소 다섯개
        // 이미지 파일로 한정 짓는 로직
    }

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(e.type === 'dragenter' || e.type === 'dragover'){
            setDragActive(true)
            console.log("#### dragActive", dragActive)
        }else if (e.type === 'dragleave'){
            setDragActive(false)
        }
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files);
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files);
        }
    }

    const onButtonClick = () => {
        inputRef.current.click();
    };
    
    return (
        <>
            <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e)=> e.preventDefault()}>
                <Input id="input-file-upload"  type="file"  multiple={true} onChange={handleChange} ref={inputRef}/>
                <Label id="lable-file-upload" htmlFor="input-file-upload">
                    <div>
                        <div>로고</div>
                        <div>여기로 사진을 끌어다 놓으세요.</div>
                        <div>5장 이상의 사진을 선택하세요.</div>
                        <button onClick={onButtonClick}>기기에서 업로드</button>
                    </div>
                </Label>
                { dragActive && <DropDiv id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></DropDiv> }
            </form>
        </>
    );
}


export const Input = styled.input`
    display: none;
`
export const Label = styled.label`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-radius: 1rem;
    border-style: dashed;
    border-color: #cbd5e1;
    background-color: #f8fafc;
`

export const DropDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`
export default DragDrop;
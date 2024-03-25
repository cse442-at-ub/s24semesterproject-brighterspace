import React from 'react'
import styled from 'styled-components'

const SupportContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-top: -200px;
    
`
const InputFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
`
export const Classes = () => {
    return (
        <div className="Classes">
            <h1>Classes</h1>
        </div>
    )
};

export const ClassOne = () => {
    return (
        <div className="Classes">
            <h1>Classes/ClassOne</h1>
        </div>
    )
};

export const ClassTwo = () => {
    return (
        <div className="Classes">
            <h1>Classes/ClassTwo</h1>
        </div>
    )
};

export const ClassThree = () => {
    return (
        <SupportContainer>
            <InputFlexBox>
                <h3>Submit your support ticket</h3>
                <h3>First Name</h3>
                <textarea/>
                <h3>Last Name</h3>
                <textarea></textarea>
                <h3>Student ID</h3>
                <textarea></textarea>
                <h3>Student Email</h3>
                <textarea></textarea>
                <h3>Problem Type</h3>
                <textarea></textarea>
                <h3>Message Content</h3>
                <textarea></textarea>
                <button>submit</button>
            </InputFlexBox>

        </SupportContainer>
    )
};
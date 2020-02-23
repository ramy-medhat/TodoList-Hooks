import styled from "styled-components/macro";

export const TodoList = styled.ul`
    padding: 0;
    list-style-type: none;
`

export const TodoItem = styled.li`
    text-align:left;
    color:#333;
    background-color:#eef1f5;
    font-size: 14px;
    padding: 10px 5px;
    text-transform: capitalize;
    
    & > input{
        margin-right: 8px;
    }
    
    &:nth-child(odd){
        background-color:#fff;
    }
`


export const AppTitle = styled.h3`
    text-transform: uppercase;
    color: #333;
`;

export const PencilIcon = styled.img`
    width: 12px;
    position: absolute;
    top: 0.75em;
    left: 10px;
`

export const DeleteIcon = styled.img`
    float: right;
    width: 1.1em;
    padding-right: 0.4em;
    padding-top: 2px;
`

export const InputTask = styled.input`
    width: 100%;
    padding: 4px;
    border-radius: 4px;
    border: 1px solid #ccc;
    height: 20px;
    font-size: 10px;
    box-shadow: 2px 3px 6px #ccc;
    text-indent: 25px;
    margin-bottom: 2.5em;

    &:focus{
        outline:none;
    }
`

export const ClearAll = styled.button`
    text-transform: uppercase;
    color: #afbccc;
    border: none;
    background: transparent;
    font-size: 15px;
    cursor:pointer;

    &>img{
        float:none;
        position: relative;
        top: 2px;
    }
`

export const EmptyListMessage = styled.p`
    margin: 0;
    font-size: 0.5em;
    color: #565656;
`
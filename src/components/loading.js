import SyncLoader from "react-spinners/SyncLoader";
// import './loading.css';
import styled from "styled-components";

export default function Loading(){
    return<LOADING className="loading">
    <SyncLoader 
    size='50' 
    color='#ff0000' 
    margin='5px' />
    </LOADING>
}
const LOADING=styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background:var(--gradient-color);
`
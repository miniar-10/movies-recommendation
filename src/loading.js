import SyncLoader from "react-spinners/SyncLoader";
import './loading.css';

export default function Loading(){
    return<div className="loading">
    <SyncLoader 
    size='50' 
    color='#ff0000' 
    margin='5px' />
    </div>
}
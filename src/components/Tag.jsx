import { useDispatch } from "react-redux";
import { fetchTagPostsThunk } from "../store/actions/postThunk";
import { setSelectedPost } from "../store/reducers/postSlice";

const Tag = ({tag, openPreview}) => {
    const dispatch = useDispatch()
    
    const handleClick = () => {
        dispatch(fetchTagPostsThunk(tag))
        dispatch(setSelectedPost('tag'))
        openPreview();
    }   

    return ( 
        <button className="ml-2 min-w-[68px] border border-orange text-white rounded-sm px-2" onClick={handleClick}>{tag}</button>              
    );
}
 
export default Tag;
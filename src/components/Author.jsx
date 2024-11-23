import { useDispatch } from "react-redux";
import { fetchUserPostsThunk } from "../store/actions/postThunk";
import { setSelectedPost } from "../store/reducers/postSlice";
import { truncateText } from "../utils/postItemRender";

const Author = ({owner: {user_id, accept_rate, profile_image, display_name}, openPreview}) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(fetchUserPostsThunk({user_id, display_name}))
        dispatch(setSelectedPost('user'))
        openPreview()
    }
    
    return ( 
        <div className="flex items-center">
           <div className="logo border border-orange w-[33px] h-[33px] rounded-md overflow-hidden">
                <img src={profile_image} alt="" />
           </div>
           <div className="text-[14px] ml-2 text-white">
                <button className="" onClick={handleClick}>{truncateText(display_name, 10)}</button>
                <div className="mt-[-6px]"><span className="text-orange">{accept_rate || 0}</span> votes</div>
           </div>
       </div>
    );
}
 
export default Author;
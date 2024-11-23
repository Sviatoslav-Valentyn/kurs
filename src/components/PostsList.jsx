import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchPostsThunk } from "../store/actions/postThunk";
import PostItem from "./PostItem";
import QuickPreview from "./QuickPreview";

const PostsList = () => {
    const posts = useSelector(state => state.postSlice.posts) 
    const [searchParams] = useSearchParams()
    const [isActive, setIsActive] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchPostsThunk(searchParams.get('query')))
    }, [searchParams])

    return ( 
        <div className="">
            {posts.map(post => (
                <PostItem key={post.question_id} post={post} setIsActive={setIsActive}/>
            ))}
            <QuickPreview isActive={isActive} setIsActive={setIsActive}/>
        </div>
    );
}
 
export default PostsList;
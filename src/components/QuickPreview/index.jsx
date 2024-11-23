import './QuickPreview.css'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import PostItem from "../PostItem";
import classNames from 'classnames';

const QuickPreview = ({isActive, setIsActive}) => {
    const {selectedPosts, tagPosts, isTagLoading, userName, userPosts, isUserLoading, tagName} = useSelector(state => state.postSlice)
    // Тут я хочу винести якось цей обєкт. Думав або ф-цію зробити або окрему компоненту, так як тут юзається дані з useSelector
    const postsData = {
        user: { posts: userPosts, loading: isUserLoading, searchBy: userName},
        tag: { posts: tagPosts, loading: isTagLoading, searchBy: tagName}
    };
    
    const { posts, loading, searchBy } = postsData[selectedPosts] || { posts: [], loading: false,};
    useEffect(() => {
        document.body.style.overflow = isActive ? 'hidden' : 'unset';
    }, [isActive]) 
    

    return ( 
        <div className={`overlay ${isActive ? 'block' : '!hidden'}`}>
        {/* // <div className={classNames('overlay', {'hidden': !isActive})}> */}
            <div className='modal container'>
                <div className="flex justify-between items-center text-white text-xl">
                    <div className="">{`Search By ${selectedPosts}: ${searchBy}`}</div>
                    <button className="" onClick={() => setIsActive(false)}>X</button>
                </div>
                <div className="">
                    {!loading ? (
                        posts.map(post => (
                            <PostItem key={post.question_id} post={post} setIsActive={setIsActive}/>
                        ))  
                    ) : ( 
                        <h1>Loading...</h1> 
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default QuickPreview;
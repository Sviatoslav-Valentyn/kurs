import { Link } from "react-router-dom";
import Author from "./Author";
import { formatNumber, truncateText } from "../utils/postItemRender";
import Tag from "./Tag";


const PostItem = ({post: {owner, title, question_id, answer_count, score, is_answered, tags, view_count }, setIsActive, dark}) => {
    return ( 
        <div className="h-[100px] w-full border-b-2 border-b-orange flex px-6 py-[10px]">
            <div className="w-[100px] h-full border-[1px] border-orange rounded-lg p-2">
                <div className="text-[13px] text-white">answers: <span className="text-orange">{answer_count}</span></div>
                <div className="text-[13px] text-white">votes: <span className="text-orange">{score}</span></div>
                <div className="text-[13px] text-white">views: <span className="text-orange">{formatNumber(view_count)}</span></div>
            </div>
            <div className="flex flex-col justify-around ml-4 max-w-[550px] w-full">
                <Link to={`/question/${question_id}`} className="text-white">{truncateText(title, 70)}</Link>
                <div className="flex">
                    {tags.slice(0,4).map((tag, key) => (
                       <Tag key={key} tag={tag} openPreview={() => setIsActive(true)} />             
                    ))}
                </div>
            </div>
            <div className="flex items-end">
                <Author owner={owner} openPreview={() => setIsActive(true)} />
            </div>
        </div>
    );
}
    
export default PostItem;
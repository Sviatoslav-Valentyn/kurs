import { useEffect, useState } from "react";
import { fetchPost, fetchPostAnswer } from "../services/postService";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaArrowDownLong } from "react-icons/fa6";

const PostArticle = () => {
    const [question, setQuestion] = useState(null)
    const [answers, setAnswers] = useState([])
    const navigate = useNavigate();
    const { id } = useParams()


        useEffect(( ) => {
            fetchPost(id).then(question => setQuestion(question.data.items[0]))
             .catch(error => console.log("Error fetching post:", error))
            fetchPostAnswer(id).then(answers => setAnswers(answers.data.items))
                .catch(error => console.log("Error fetching post answers:", error));
        }, [])

        return ( 
            <div className="text-white">
                <div className="back cursor-pointer text-xl text-align px-4 py-1 border inline-flex justify-between items-center" onClick={() => navigate(-1)}>
                    <IoMdArrowBack className="mr-2"/>
                    Back
                </div>
                {question && (
                    <>
                        <div className="text-[36px]" dangerouslySetInnerHTML={{ __html: question.title }}></div>
                        <div className="" dangerouslySetInnerHTML={{ __html: question.body }}></div>
                        {/* <hr className="my-10 text-orange border"/> */}
                        <div className="flex justify-center my-6">
                            <FaArrowDownLong className="text-[50px]"/>
                        </div>
                    </>
                )}
                {answers.length && (
                    <div className="">
                        <div className="text-[36px]">{answers.length} answers</div>
                        {answers.map((answer, key) => (
                            <div key={key} className="">
                                <div className="" dangerouslySetInnerHTML={{ __html: answer.body }}></div>
                                <hr className="my-6 text-orange border" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
    
    export default PostArticle;
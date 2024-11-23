import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()

    return ( 
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-white">
            <div className="">404</div>
            <div className="">NOT FOUND</div>
            <button onClick={() => navigate('/')} className="border border-white text-xl px-7">Back to Main Page</button>
        </div>    
    );
}
 
export default NotFound;
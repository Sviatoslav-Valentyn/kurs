import { Outlet } from "react-router-dom";
import { Header } from "../components";

const Main = () => {
    return ( 
        <>
            <Header />
            <div className="mt-8">
                <Outlet />        
            </div>
    
        </>
    );
}
 
export default Main;
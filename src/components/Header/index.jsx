import './Header.css'
import { useForm } from "react-hook-form";
import { createSearchParams, useNavigate } from "react-router-dom";

const Header = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate()

    const onSubmit = ({searchValue}) => {
        navigate({
            pathname: 'results',
            search: `?${createSearchParams({query: searchValue})}`
        })
    }
        
    return ( 
        <div className="mt-2 text-center">
            <div className="text-[36px] text-orange">stackoverflowSearching</div>
            <form className="relative" onSubmit={handleSubmit(onSubmit)}>
                <input {...register('searchValue', {required: 'This input is required'})} className="search-input" type="text" placeholder="Search..."/>
                <div className="text-white absolute left-0">{errors.searchValue?.message}</div>
                <button className="search-button">Search</button>
            </form>
        </div>    
    );
}
 
export default Header;
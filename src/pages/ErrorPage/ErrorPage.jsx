import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            Error 
            <Link to="/"><button className="btn btn-neutral text-white font-extrabold">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;
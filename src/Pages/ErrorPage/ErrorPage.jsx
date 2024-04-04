import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center h-screen flex justify-center items-center">
            <div className="">
                <h2 className='text-red-500 text-4xl font-semibold'>oops.. this page is not found</h2>
                <Link to={"/"}><button className="btn my-10 bg-blue-400">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;
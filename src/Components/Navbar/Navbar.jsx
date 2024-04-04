
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-20">
                <div className="flex-1">
                    <a className="text-xl">Task Flow</a>
                </div>
                <div className="flex-none">
                    
                    <div className="dropdown dropdown-end">
                        <button className="btn bg-blue-500">
                            Login
                        </button>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
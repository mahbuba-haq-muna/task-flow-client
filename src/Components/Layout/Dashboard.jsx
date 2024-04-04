import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <div className="lg:flex">
                <div className="lg:w-64 min-h-screen bg-red-100 p-4">
                    <div className="text-center mb-10">
                        {/* <img src={logo} className='w-20' alt="" /> */}
                        <h2 className="text-3xl font-bold uppercase">Task<span className="text-teal-500">Burst</span></h2>
                    </div>
                    <ul className="menu text-lg">
                        <li className="bg-teal-300 rounded-lg"><Link to="/dashboard/userProfile">
                            Create</Link>
                        </li>
                        <li className="bg-teal-300 rounded-lg mt-3"><Link to="/dashboard/todo">
                            Todo List</Link>
                        </li>
                        <li className="bg-teal-300 rounded-lg mt-3"><Link to="/dashboard/ongoing">
                            Ongoing Task</Link>
                        </li>
                        <li className="bg-teal-300 rounded-lg mt-3"><Link to="/dashboard/completed">
                            Completed Task</Link>
                        </li>
                        <div className="divider"></div> 
                        <li className="bg-teal-300 rounded-lg mt-3"><Link to="/">
                            Home</Link>
                        </li>
                        {/* <li onClick={handleLogOut} className="bg-red-300 rounded-lg mt-3 btn "> Sign Out</li> */}
                       
                    </ul>
                </div>
                {/* dashboard content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
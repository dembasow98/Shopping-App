import {Component} from 'react';


class Register extends Component{
    render(){
        return(
            <div className="flex justify-center min-w-[80%] h-screen bg-yellow">
                <div className="flex flex-col justify-center mt-4 items-center bg-white text-gray-700 w-[380px] md:w-[400px] lg:w-[480px] h-[480px] rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-gray-900">Register</h1>
                    <p className="text-gray-500 dark:text-gray-400">Create an account to continue</p>
                    <form className="flex flex-col justify-center items-center min-w-[80%]">
                        <div className="flex flex-col justify-center items-center w-full">
                            <label className="text-gray-900 dark:text-white">Username</label>
                            <input className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500" type="text" placeholder="Username"/>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full">
                            <label className="text-gray-900 dark:text-white">Email</label>
                            <input className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500" type="email" placeholder="Email"/>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full">
                            <label className="text-gray-900 dark:text-white">Password</label>
                            <input className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500" type="password" placeholder="Password"/>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full">
                            <label className="text-gray-900 dark:text-white">Confirm Password</label>
                            <input className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500" type="password" placeholder="Confirm Password"/>
                        </div>
                        <div className='LOGIN-BUTTON flex items-center min-w-[70%] mt-3'>
                            <button className='m-2 p-2 rounded-full border-2 w-full text-white bg-gradient-to-r from-purple-500 via-purple-500 to-purple-800 hover:bg-gradient-to-br font-medium text-xl'>Register</button>
                        </div>
                    </form>
                    {/*Already user? Login*/}
                    <div className="flex justify-center items-center w-full mt-3 text-sm font-medium">
                    <p className='text-sm font-medium'>Already user? <a href='/register' className='text-blue-500'>Login</a></p>
                    </div>
                </div>
            </div>
        );          
    };
};

export default Register;
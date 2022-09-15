//import the app logo
import logo from './img/logo.png';
function App() {
  return (
    <div className="SCREEN flex w-full h-screen dark:bg-gray-500 place-content-center">
      <div className="CONTAINER dark:bg-gray-800 bg-gray-200 w-5/6">
        <nav className="NAVBAR flex flex-row justify-between items-center bg-gray-900 text-white h-24">
          <div className="LOGO flex items-center">
            <img src={logo} alt="logo" />
            <h1 className="text-2xl font-bold">E-COMMERCE</h1>
          </div>
          <div className="NAVBAR-MENU md:w-1/2 flex flex-wrap justify-between items-center ml-auto mr-4">
            <div className="MENU-ITEMS md:flex hidden mr-4 justify-center">
              <ul className="flex flex-wrap justify-between items-center">
                <li className="mr-5">
                  <a href="#">Home</a>
                </li>
                <li className="mr-5">
                  <a href="#">About</a>
                </li>
                <li className="mr-5">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <button className="LOGIN-BUTTON bg-blue-500 text-white font-bold py-2 px-4 rounded mr-3">
              Login
            </button>
            <button className="BURGER-BUTTON md:hidden  mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 bg-gray-700 rounded-full p-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
                color='blue-500'
              >
                <path
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          

        </nav>
        

        
      </div>
    </div>
  );
}

export default App;

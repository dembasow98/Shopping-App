//import the app logo
import logo from './img/logo.png';
function App() {
  //if the the user clicks on the burger button, display the menu items
  const showMenu = () => {
    //get the menu items by id
    const menuItems = document.getElementById('menu-items');
    
    //if the menu items are hidden, display them
    if (menuItems.classList.contains('hidden')) {
      menuItems.classList.remove('hidden');
    } else {
      //if the menu items are displayed, hide them
      menuItems.classList.add('hidden');
    }

  };
  return (
    <div className="SCREEN flex w-full h-screen dark:bg-gray-500 place-content-center">
      <div className="CONTAINER dark:bg-gray-800 bg-gray-200 w-5/6">
        <nav className="NAVBAR flex flex-row justify-between items-center bg-gray-900 text-white h-24 border-b border-gray-200 dark:border-gray-600">
          <div className="LOGO flex items-center">
            <a href='/' className='flex items-center'>
              <img src={logo} alt="logo" />
              <span class="self-center text-xl font-bold whitespace-nowrap dark:text-white">E-COMMERCE</span>
            </a>
          </div>
          <div className="NAVBAR-MENU flex md:order-2">
            <button className="LOGIN-BUTTON bg-violet-500 hover:bg-violet-600  active:bg-violet-700 text-white font-bold py-2 px-6 rounded-full mr-5 md:mr-10">
              Login
            </button>
            <button className="BURGER-BUTTON md:hidden mr-5 " id="burger-button" onClick={showMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 hover:bg-gray-700 rounded-full p-1"
                viewBox="0 0 24 24"
                //Change the fill color to blue  
                fill="blue"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="MENU-ITEMS hidden top-20 w-5/6 fixed md:top-auto md:static justify-between items-center md:flex md:w-auto md:order-1" id='menu-items'>
            <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
              <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        

        
      </div>
    </div>
  );
}

export default App;

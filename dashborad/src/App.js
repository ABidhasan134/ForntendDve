
import { Outlet, RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import User from './pages/user/user';
import Product from './pages/product/product';
import Login from './pages/login/login';
import Navbar from './global/navbar/navbar';
// import Menu from './global/menu/menu';
import Footer from './global/footer/footer';
import './App.css';
import Sidebar from './global/menu/sidebar';

function App() {
  
  const LayOut=()=>{
   return(
    <div className='main'>
      
      <Navbar/>
        <div className='contener'>
            <div className='menuContener'>
              <Sidebar/>
            </div>
            <div className='contenContener'>
                <Outlet/>
            </div>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
    </div>
   )
  }


  const router=createBrowserRouter([
    {
      path:'/',
      element:<LayOut />,
      children:[
        {
          path:'/',
          element:<Home/>,
        },
        {
          path:'/user',
          element: <User/>,
        },
        {
          path: '/product',
          element:<Product/>
        }
      ],
    },
    {
      path:'/login',
      element:<Login/>
    }
  ]);
  return<RouterProvider router={router} />
}

export default App;
{/* <BrowserRouter>
<Routes>
 <Route path="/" element={<Home />} /><Route/>
 <Route path='/user' element={<User/>}></Route>
 <Route path='/product' element={<Product/>}></Route>
</Routes>
</BrowserRouter> */}
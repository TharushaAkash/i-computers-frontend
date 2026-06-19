
import './App.css'
import HomePage from '../pages/homePage'
import ProductCard from './components/productCard'
import AdminPage from '../pages/adminPage'
import { Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import ProductPage from '../pages/productsPage'
=======
import TestPage from '../pages/test'
import LoginPage from '../pages/loginPage'
import { Toaster } from 'react-hot-toast'
import RegisterPage from '../pages/registerPage'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ForgetPassword from '../pages/forgetPassword'

//156718786153-5sr1gd4j03frqbrqnkk4c1dj6ebttlea.apps.googleusercontent.com
>>>>>>> e8030567241af194c4858e0675d2c94bfdf43c98

export default function App() {
  

  return (
    <GoogleOAuthProvider clientId="156718786153-5sr1gd4j03frqbrqnkk4c1dj6ebttlea.apps.googleusercontent.com">
    
        <div className= 'w-full h-screen  relative bg-primary'>
          <Toaster position='top-center' />
          <Routes>
<<<<<<< HEAD
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/admin' element={<AdminPage />} />
=======
            <Route path='/*' element={<HomePage />} />
            {/* <Route path='/products' element={<ProductCard />} /> */}
            <Route path='/admin/*' element={<AdminPage />} />
            <Route path='/test' element={<TestPage />} />
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='/forgot-password' element={<ForgetPassword />}/>
            
>>>>>>> e8030567241af194c4858e0675d2c94bfdf43c98
          </Routes>

          <ProductCard
            name="Sample Product"
            price={19.99}
            description="This is a sample product description."
          />
        </div>
      </GoogleOAuthProvider>

          
      

      
  
  )
}

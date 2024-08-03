import React, { useContext } from 'react'
import './header.css'
import { ShoppingCart } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { productAPI } from './Index'

function Header() {
  const{cart} = useContext(productAPI)
  return (
    <div>
      <div className='main-container'>
     <header>
     <Link to="/">
        <h1 className='text-[30px] font-semibold'> Ecommerce</h1>
     </Link>
     </header>
     <nav className='rightnav'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/cart'>Cart <ShoppingCart/><span className='count bg-black text-white rounded-full'>{cart.length}</span></Link></li>
        </ul>
     </nav>
     </div>
  

    </div>
  )
}

export default Header

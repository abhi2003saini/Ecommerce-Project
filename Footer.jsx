import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <div className='footer-container '>
    <h1 className='text-xl font-semibold px-[100px] pt-9 text-white'>Ecommerce</h1>
   
    <p className="text-white px-[90px]">Your slogan or tagline here</p>
    <div className='middle-footer'>
        <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>products</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
        </ul>
    </div>
    <div className='right-footer '>
    <h3 className='text-white '>Your Social Elememnt here</h3>
   <a><FacebookIcon className='text-white hover:text-blue-500'/></a> 
     <a href='#' target='_'><InstagramIcon className='text-white  hover:text-blue-500 '/></a>
     <a href='#' target='_'><TwitterIcon className='text-white  hover:text-blue-500'/></a>
    
    </div>  
    </div>
  )
}

export default Footer

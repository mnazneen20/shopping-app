import React, {useContext} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Contexts/ShopContextProvider'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Navbar() {
  const { cart } = useContext(ShopContext)
  return (
    <nav>
        <h1 className="logo">naazshop</h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cart'><ShoppingCartIcon sx={{ fontSize: 30 }} /></Link><p className='cartitems'>{cart.length}</p></li>
        </ul>
    </nav>
  )
}

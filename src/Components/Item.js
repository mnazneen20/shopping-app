import React, { useContext } from 'react'
import './item.css'
import { ShopContext } from '../Contexts/ShopContextProvider'
import { Link } from 'react-router-dom'

export default function Item(props) {
  const { cart, addtocart, setsingleproduct } = useContext(ShopContext)

  const exists = function() {
    if(cart.some(m => m.id === props.item.id)){
      const founditem = cart.find(m => m.id === props.item.id)
      return founditem.quantity;
    }
    return 0;
  }

  // changing data for singleproduct page 
  const handledetailbtn = function(item) {
    setsingleproduct(item)
  }

  return (
    <div className='itemCard'>
        <img src={props.item.image} alt={props.item.title} className="itemimg" />
        <p className="itemname">{props.item.title}</p>
        <p className="pricetag">$ {props.item.price}</p>
        <Link to='/product' className='detailbtn' onClick={() => handledetailbtn(props.item)}>View Details</Link>
        <br />
        <button className='addtocartbtn' onClick={() => addtocart(props.item)}>Add to Cart ({exists()})</button>
    </div>
  )
}

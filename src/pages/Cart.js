import React, {useContext} from 'react'
import { ShopContext } from '../Contexts/ShopContextProvider'
import './cart.css'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { cart, addtocart, removefromcart } = useContext(ShopContext)

  function subTotal (cartarray) {
    let total = 0;
    cartarray.forEach(m => {
      total += (m.price*m.quantity)
      // console.log(m.price, m.quantity)
    })
    return total;
  }

  return (
    <>
    {cart.length === 0 ?
      <div className="emptycart">
        <p>Your cart is empty.</p>
        <button><Link to='/'>Go Back Shopping</Link></button>
      </div>
      :
      <div className='cartcontainer'>
        {cart.map(m => <CartCard key={m.title} item={m} addtocart={addtocart} removefromcart={removefromcart} />)}
        <div className="totalamount"><p>Your sub total amount is  <b>$ {subTotal(cart)}</b></p></div>
        <div className="actionbtns">
          <button><Link to='/'>Go Back Shopping</Link></button>
          <button>Proceed To Payment</button>
        </div>
      </div>
    }
    </>
    
  )
}

function CartCard(props) {
  const { cart, setcart } = useContext(ShopContext)
  const { addtocart, removefromcart } = props

// handle the input changes of each cart
  function handlechange(e, item){

    const updatedItems = cart.map(m => {
                    if (m.id === item.id) {
                        return { ...m, quantity: parseInt(e.target.value) };
                    }
                    return m;
                    });
            
    setcart(updatedItems);
  }


  return (
    <div className="cartcard">
      <img src={props.item.image} alt={props.item.title} className="cartcardimg" />
      <div>
        <div className="cartitemname">{props.item.title}</div>
        <div className="cartitemprice">$ {props.item.price}</div>
        <div className="cartitemquantity">
          <button onClick={() => removefromcart(props.item)}>-</button>
          <input type="number" placeholder={props.item.quantity} onChange={(e) => handlechange(e, props.item)} />
          <button onClick={() => addtocart(props.item)}>+</button>
        </div>
      </div>
    </div>
  )
}
import React, { useContext } from 'react'
import './singleproduct.css'
import { ShopContext } from '../Contexts/ShopContextProvider'
import Popup from '../Components/Popup'
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';

export default function Singleproduct() {
  const { cart, setcart, singleproduct } = useContext(ShopContext)

  // console.log(singleproduct)
  // if product exists in cart or not 
  const exists = function() {
    if(cart.some(m => m.id === singleproduct.id)){
      const founditem = cart.find(m => m.id === singleproduct.id)
      return founditem.quantity;
    }
    return 0;
  }
  const [productquantity, setproductquantity] = React.useState(exists());

  // add product to the cart 
  const handleproducttocart = function(e){
    const productnumber = parseInt(e.target.parentElement.children[1].placeholder)
    // console.log(productnumber)
    const thespan =  document.getElementById('wronginput');
    if(productnumber <= 0){
      thespan.innerHTML = "Please give a valid number!";
      thespan.classList.add('red')
    }
    else {
      thespan.innerHTML = `Added`;
      thespan.classList.add('green');


      // updating the cart 
    if (cart.length === 0){
            setcart([{...singleproduct, quantity: productnumber}])
        } else {
            const getval = cart.some(m => m.id === singleproduct.id)

            if(getval){
                const updatedItems = cart.map(m => {
                    if (m.id === singleproduct.id) {
                        return { ...m, quantity: productnumber };
                    }
                    return m;
                    });
            
                setcart(updatedItems);

            } else{
                setcart((prev) => ([...prev, {...singleproduct, productnumber}]))
            }
        }
    }
    
  }

  // popup state 
  const [popupopen, setpopupopen] = React.useState(false);

  return (
    <div className='singlepage-container'>
      {popupopen ? <Popup img={singleproduct.image} title={singleproduct.title} closepopup={setpopupopen} /> : ''}


      <div className="elements">
        <div className="productimg">
          <img src={singleproduct.image} alt={singleproduct.title} className="bigimg" />
          <ZoomInRoundedIcon className='zoom' sx={{ fontSize: 30 }} onClick={() => setpopupopen(true)} />
        </div>
        
        <div className="productalldetails">
          <p className="productcategory">{singleproduct.category}</p>
          <p className="productname">{singleproduct.title}</p>
          <p>{singleproduct.description}</p>
          <p className="productprice">$ {singleproduct.price}</p>
          <p id="wronginput"></p>
          <div className="cartingsection">
            <button onClick={() => setproductquantity(prev => prev-1)}>-</button>
            <input onChange={(e) => setproductquantity(e.target.value)} type="number" placeholder={productquantity} className='productnumbers' />
            <button onClick={() => setproductquantity(prev => prev+1)}>+</button>
            <button className="producttocart" onClick={(e) => handleproducttocart(e)}>Add to Cart</button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

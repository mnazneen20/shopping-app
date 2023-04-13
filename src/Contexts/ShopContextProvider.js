import React, { createContext } from 'react'

export const ShopContext = createContext(null);

export default function ShopContextProvider(props) {
    const [cart, setcart] = React.useState([]);

    const [singleproduct, setsingleproduct] = React.useState({});

    const [loading, setloading] = React.useState(true)
    const [alldata, setalldata] = React.useState([])

    function handlefetch (data) {
        setalldata(data)
        setloading(false)
    }
    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => handlefetch(res))
    }, [])

    function addtocart (item) {
        if (cart.length === 0){
            setcart([{...item, quantity: 1}])
        } else {
            const getval = cart.some(m => m.id === item.id)

            if(getval){
                const updatedItems = cart.map(m => {
                    if (m.id === item.id) {
                        return { ...m, quantity: m.quantity + 1 };
                    }
                    return m;
                    });
            
                setcart(updatedItems);

            } else{
                setcart((prev) => ([...prev, {...item, quantity: 1}]))
            }
        }
    }

    function removefromcart(item) {
        const updatedItems = cart.map(m => {
                    if (m.id === item.id) {
                        return { ...m, quantity: m.quantity - 1 };
                    }
                    return m;
                    });
            
        setcart(updatedItems);
    }

    function deletefromcart(item) {
        
        setcart(prev => {
            return prev.filter(itemInCart => itemInCart.id !== item.id);
        })
    }

    const contextValue = {loading, alldata, cart, setcart, addtocart, removefromcart, singleproduct, setsingleproduct, deletefromcart}

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

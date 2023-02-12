import React, { useContext } from 'react'
import './home.css'
import Item from '../Components/Item'
import { ShopContext } from '../Contexts/ShopContextProvider'

export default function Home() {
  
  const { alldata, loading } = useContext(ShopContext)
    
    
  return (
    <div className='allitems'>
        {loading ? 'Data is loading...' : alldata.map(d => <Item key={d.id} item={d} /> )}
    </div>
  )
}

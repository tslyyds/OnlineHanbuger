import React from 'react'

const Context = React.createContext({
    items:[],
    totalAmount:0,
    totalPrice:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    clearCar:()=>{}
})

export default Context
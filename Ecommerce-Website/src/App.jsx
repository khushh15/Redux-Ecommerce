import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"

import{ persistStore,persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { PersistGate } from "redux-persist/integration/react"

import { Routes,Route } from "react-router-dom"
import Item from "./Item"
import Items from "./Items"
import Cart from "./Cart"
import Footer from "./Footer"
import Navbar from "./Navbar"
import AddItem from "./AddItem"
import RootReducer from "./Reducer/RootReducer"
import './App.css'


function App() {
//  const store = createStore(RootReducer)
const persistConfig ={
  key :'root',
  storage
}
// CREATE PERSIST REDUCER
const persistedReducer = persistReducer(persistConfig,RootReducer)

// CREATE STORE FOR PERSISTED REDUCER
const store = createStore(persistedReducer)

// CREATE PERSISTER
const persistore =persistStore(store)


  return (
    <>
          <div>
          <Provider store={store}>
          <PersistGate persistor={persistore}>
             
              <Navbar/>
          <Routes>
               <Route path="/Additem" element={<AddItem/>}></Route>
               <Route path="/Items" element={<Items/>}></Route>
               <Route path="Cart" element={<Cart/>}></Route>
          </Routes>
          </PersistGate>
          </Provider> 
          </div>
      
    </>
  )
}

export default App

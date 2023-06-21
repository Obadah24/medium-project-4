import React, {useEffect} from "react"
import "./App.css"
import Auth from "./components/Auth";
import { useSelector, useDispatch} from "react-redux"
import Layout from "./components/Layout"
import Notification from "./components/Notification"
import {fetchData, sendCartData} from './store/cartActions'
let isFirstRender = true
export default function App()  {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const notification = useSelector((state) => state.ui.notification)
  useEffect(() => {
    dispatch(fetchData())
  },[dispatch])
  useEffect(() => {
    if(isFirstRender) {
      isFirstRender = false
      return
    }
    if(cart.changed){
      dispatch(sendCartData(cart))
    }
}, [cart,dispatch])
  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message} />}
      {!isLoggedIn && <Auth />}

      {isLoggedIn && <Layout />}
    </div>
  )
}




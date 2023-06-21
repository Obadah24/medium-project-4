import { uiActions } from "./ui-slice"
import { cartActions } from "./cartSlice"


export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler  = async () => {
      const res = await fetch("https://redux-http-d778c-default-rtdb.firebaseio.com/cartItems.json")
      const data = await res.json()
      return data
    }
    try{
        const CartData = await fetchHandler()
        dispatch(cartActions.replaceData(CartData))
    }catch(err){
      dispatch(uiActions.showNotification({
        open:false,
        message:'Sending Request Failed',
        type:'error'
      }))
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open:true,
        message:'Sending Request',
        type:'warning'
      })
    )
    const sendRequest = async () => {
      //Send state as Sending Request
      const res = await fetch("https://redux-http-d778c-default-rtdb.firebaseio.com/cartItems.json",{
        method:'PUT',
        body:JSON.stringify(cart)
      })
      const data = await res.json()
      //Send state as Request is successful
      dispatch(uiActions.showNotification({
        open:true,
        message:'Sending Request To Database Successfully',
        type:'success'
      }))
    }
    try{
      await sendRequest()
    } catch(err) {
      dispatch(uiActions.showNotification({
        open:false,
        message:'Sending Request Failed',
        type:'error'
      }))
    }
  }
}
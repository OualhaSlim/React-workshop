import SHOP_DATA from './shop-data'
import { cartActionTypes } from './action-type'
const initState = {
    items: SHOP_DATA,
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
    //console.log(action);
    //INSIDE HOME COMPONENT
    switch(action.type){
        case cartActionTypes.ADD_TO_CART:{
            //console.log(action);
            //console.log(state);
              let addedItem = state.items.find(item=> item.id === action.id)
              //check if the action id exists in the addedItems
             let existed_item= state.addedItems.find(item=> action.id === item.id)
             if(existed_item)
             {
                addedItem.quantity += 1 
                 return{
                    ...state,
                     total: state.total + addedItem.price 
                      }
            }
             else{
                addedItem.quantity = 1;
                //calculating the total
                let newTotal = state.total + addedItem.price 
                
                return{
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total : newTotal
                }
                
            }
        }
        //Removing an item
        case cartActionTypes.REMOVE_ITEM:{
            let itemToRemove= state.addedItems.find(item=> action.id === item.id)
            let new_items = state.addedItems.filter(item=> action.id !== item.id)
            
            //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
            console.log(itemToRemove)
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        //INSIDE CART COMPONENT
        case cartActionTypes.ADD_QUANTITY:{
            let addedItem = state.items.find(item=> item.id === action.id)
              addedItem.quantity += 1 
              let newTotal = state.total + addedItem.price
              return{
                  ...state,
                  total: newTotal
              }
        }
        case cartActionTypes.SUB_QUANTITY:{  
            let addedItem = state.items.find(item=> item.id === action.id) 
            //if the qt == 0 then it should be removed
            if(addedItem.quantity === 1){
                let new_items = state.addedItems.filter(item=>item.id !== action.id)
                let newTotal = state.total - addedItem.price
                return{
                    ...state,
                    addedItems: new_items,
                    total: newTotal
                }
            }
            else {
                addedItem.quantity -= 1
                let newTotal = state.total - addedItem.price
                return{
                    ...state,
                    total: newTotal
                }
            }
            
        }
        case cartActionTypes.ADD_SHIPPING:{
            return{
            ...state,
            total: state.total + 6
                  }
            }
        case cartActionTypes.SUB_SHIPPING:{
            return{
                ...state,
                total: state.total - 6
                      }
        }
    }
    
return state
    
  }
  export default cartReducer
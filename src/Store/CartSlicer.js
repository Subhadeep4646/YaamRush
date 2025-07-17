import { createSlice } from "@reduxjs/toolkit";

const cart=createSlice({
    name:'cartslice',
    initialState:{
        items:[],
        count:0,
        total:0,
    },

//     {
//            object will come like this
//            id:1234,
//            name:"wednesday chicken"
//            category:"slicer"
//            quantity:1
//     }
//[{id:123,name:"fghh",quantity:1},{},{}]

//    action.payload → contains the data you're passing (resData).
    reducers:{
        additems:(state,action)=>{
           state.items.push({...action.payload,quantity:1});
           state.total+=(action.payload.price||action.payload.defaultPrice);
           state.count++;
        },
        Increment:(state,action)=>{
           const obj=state.items.find(item=> item.id===action.payload.id);
           obj.quantity+=1;
           state.total+=(action.payload.price||action.payload.defaultPrice)
           state.count++;
        },
        Decrement:(state,action)=>{
            const obj=state.items.find(item=> item.id===action.payload.id);
            if(obj.quantity>1){
                obj.quantity-=1;
                state.total-=(action.payload.price||action.payload.defaultPrice);
                state.count--;
            }
            else{
             state.items=state.items.filter(item => item.id!=action.payload.id);
             state.total-=(action.payload.price||action.payload.defaultPrice);
             state.count--;
            }
        }
    }
})

export const{additems,Increment,Decrement}=cart.actions;
export default cart.reducer;
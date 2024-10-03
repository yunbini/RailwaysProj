import { configureStore, createSlice } from '@reduxjs/toolkit'
import before from '../assets/images/BeforeScan.png';
import disorder from '../assets/images/disorder.png';
import complete from '../assets/images/complete.png';

let resultBox = createSlice({
    name:'resultBox',
    initialState : [
        {before}
    ],
    reducers : {
        complete(){
            return {complete};
        },
        disorder(){
            return {disorder};
        }
    }
})
// let orderAmount = createSlice({
//     name:'orderAmount',
//     initialState:0,
//     reducers:{
//         plusAmount(state){
//             return state + 1;
//         },
//         minusAmount(state){
//             return state - 1;
//         },
//         resetAmount(state){
//             return 0;
//         }
//     }
// })
// let orderPrice = createSlice({
//     name:'orderPrice',
//     initialState:0,
//     reducers: {
//         plusPrice(state,action){
//             return state + action.payload;
//         },
//         minusPrice(state,action){
//             return state - action.payload;
//         },
//         resetPrice(state){
//             return 0;
//         }
//     }
// })

// export let {addMenus,removeMenus,resetMenus} = checkedMenus.actions;
// export let {plusPrice,minusPrice,resetPrice} = orderPrice.actions;
// export let {plusAmount, minusAmount,resetAmount} = orderAmount.actions;
export let {complete,disorder} = resultBox.actions;


export default configureStore({
  reducer: { 
    //   checkedMenus : checkedMenus.reducer,
    //   orderAmount : orderAmount.reducer,
    //   orderPrice: orderPrice.reducer,
      resultBox: resultBox.reducer
  }
})  
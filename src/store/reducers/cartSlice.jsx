import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    totalPrice: 0,
    items: [],
  },
  reducers: {
    addItem(state,action){
      const duplicate = state.items.find(el => el.id === action.payload.id);
      const flag = state.items.find(el => el.minus === action.payload.minus)
      if(duplicate){
        if(flag){
          duplicate.count++
        } else {
          if(duplicate.count >= 2) duplicate.count--
        }
        state.totalPrice = state
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
      }
      state.totalPrice = state.items.reduce((acc,item) => {
        return acc + (item.price * item.count) 
      },0)
    },
    removeItem(state,action){
      const filter = state.items.filter(el => el.id !== action.payload)
      state.items = filter
      state.totalPrice = filter.reduce((acc,item) => {
        return acc + (item.price * item.count) 
      },0)
    },
    clearItems(state,action){
      state.items = []
      state.totalPrice = 0
    }
  },
})

export default cartSlice.reducer

export const {addItem, removeItem, clearItems } = cartSlice.actions
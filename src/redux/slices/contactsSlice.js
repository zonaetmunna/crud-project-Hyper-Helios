import { createSlice } from '@reduxjs/toolkit'


const contactsSlice = createSlice({
     name: 'contact',
     initialState:[],
     reducers: {
          addContact:(state,action)=>{
               state.push(action.payload)
          },
          deleteContact:(state,action)=>{
               return state.filter(s=>s.id!==action.payload);
               
          },
          updateContact:(state,action)=>{
               const { id, name, number } = action.payload;
               const existingContact = state.find((s) => s.id === id);
               if (existingContact) {
                    existingContact.name = name
                    existingContact.number = number
               }
          }
     }
   })
   export const { addContact,updateContact,deleteContact } = contactsSlice.actions;
   export default contactsSlice.reducer;
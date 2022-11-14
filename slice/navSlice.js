import { createSlice} from '@reduxjs/toolkit';


const initialState={
    origin: null,
    destination: null,
    timeTravelInformation: null

}

export const navSlice=createSlice({
    name:'nav',
    initialState,
    reducer:{
        //Reducers hold the set actions of the states
        setOrigin: (state, action)=>{
            //state is the current state and the action is the d
            state.origin= action.payload;

        },
        setDestination:(state, action)=>{
            state.destination= action.payload;
        },
        setTimeTravelInformation: ()=>{
            state.timeTravelInformation=action.payload;

        }

    }
})

export const {
                setOrigin, 
                setDestination, 
                setTimeTravelInformation
            }= navSlice.actions; // acessing n avigation actions

// Selectors "As we have set, we need get" 

export const selectOrigin=(state) => state.nav.origin;
export const selectDestination=(state)=> state.nav.destination;
export const selectTimeTravelInformation=(state)=> state.nav.timeTravelInformation;



export default navSlice.reducer;
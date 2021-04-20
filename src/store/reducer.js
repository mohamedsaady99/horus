const initialState={
    count:0,
    price:170,
    totalPrice:0
}
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case "ADD_SEAT":
            return{
                ...state,
                count:state.count+1,
                totalPrice:state.totalPrice+state.price
            };           
        case "RESET":
            return{
                ...state,
                count:0,
                totalPrice:0
            };
        default:
            return state;
    }
}
export default reducer;
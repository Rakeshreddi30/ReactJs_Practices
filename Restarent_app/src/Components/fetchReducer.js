export const reducer = (state,action)=>{
    switch(action.type){
        case "FETCH_LOADING":{
            return {
                ...state,
                loading:true,
                error:false,
                data:[]
            }
        }
        case "FETCH_SUCCESS":{
            return{
                ...state,
                loading:false,
                data:action.payload,
                error:false
            }
        }
        case "FETCH_ERROR" :{
           return{
               ...state,
               loading:false,
               error:true,
               data:[]
               
           }
        }
    }

}
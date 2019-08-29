import {ADD_USER, DEL_USER, ADD_ID} from './types'

const initialState = {
  
  user : {
    login : "",
    facebookId:""
  }
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      return {
        user:  {login: action.login, facebookId : state.user.facebookId},
      };
    }
    case DEL_USER:{
      return {
        user: {login: "", facebookId : state.user.facebookId}
      }
    };
    case ADD_ID:{
      return {
        user: {login: state.user.login, facebookId : action.id}
      }
    }
   
    default:
      return state;
}
}

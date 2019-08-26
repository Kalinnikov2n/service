import {ADD_USER, DEL_USER} from './types'

const initialState = {
  
  user : {
    login : ""
  }
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      return {
        user:  {login: action.login},
      };
    }
    case DEL_USER:{
      return {
        user: {login: ""}
      }
    }
   
    default:
      return state;
}
}

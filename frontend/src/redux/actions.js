import {ADD_USER, DEL_USER, ADD_ID} from './types'

const addUser = (login) => {
  return {
    type: ADD_USER,
    login: login
  }
};

const delUser = () => {
  return {
    type: DEL_USER
  }
};
 
const addId = (id) => {
  return {
    type: ADD_ID,
    id: id
  }
};



export { addUser, delUser, addId };

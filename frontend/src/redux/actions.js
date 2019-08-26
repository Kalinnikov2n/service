import {ADD_USER, DEL_USER} from './types'

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




export { addUser, delUser };

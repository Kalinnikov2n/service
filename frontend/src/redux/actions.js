import {ADD_USER, DEL_USER, ADD_CARD} from './types'

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

const addCard = (cardTitle) => {
    return {
      type: ADD_CARD,
      title: cardTitle,
    }
  }


export { addUser, delUser, addCard };

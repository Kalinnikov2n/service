import {ADD_USER, DEL_USER, ADD_CARD} from './types'

const initialState = {
  cards: [
    {
      qu: 'Для чего мы существуем?',
      ans: 'Писать код',
      score: 200,
      cat: 'Философы'
    },
    {
      qu: 'Для чего мы существуем?',
      ans: 'Писать код',
      score: 400,
      cat: 'Философы'
    },
    {
      qu: 'Для чего мы существуем?',
      ans: 'Писать код',
      score: 600,
      cat: 'Философы'
    },
    {
      qu: 'Агент??',
      ans: '007',
      score: 200,
      cat: 'Агент 007'
    },
    {
      qu: 'Для чего мы существуем?',
      ans: 'Писать код',
      score: 600,
      cat: 'Агент 007'
    },
    {
      qu: 'Для чего мы существуем?',
      ans: 'Писать код',
      score: 800,
      cat: 'Агент 007'
    },
  ],
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
    case ADD_CARD: {
      return {
        cards: [...state.cards, { cat: action.cat, qu: 'Для чего мы существуем?', ans: 'Писать код', score: 200 }],
      };
    }
    default:
      return state;
}
}

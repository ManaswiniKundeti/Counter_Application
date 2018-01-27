import * as actionTypes from './actionTypes';

//creating actions - counter
export const increment = () => {
  return {
      type : actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
      type : actionTypes.DECREMENT
  };
};

export const add = (value) => {
  return {
      type : actionTypes.ADD,
      value : value
  };
};

export const sub = (value) => {
  return {
      type : actionTypes.SUB,
      value : value
  };
};
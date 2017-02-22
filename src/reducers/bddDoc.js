import { BDD_DOC_LOADED, DELETE_ALL_DATA } from '../actions'

const bddDoc = (state = [], action) => {
  switch (action.type) {
    case BDD_DOC_LOADED:
      return action.data
    case DELETE_ALL_DATA:
      return []
    default:
      return state;
  }
};

export default bddDoc;


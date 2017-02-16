import {BDD_DOC_LOADED} from '../actions'

const bddDoc = (state = [], action) => {
  switch (action.type) {
    case BDD_DOC_LOADED:
      return action.data
    default:
      return state;
  }
};

export default bddDoc;


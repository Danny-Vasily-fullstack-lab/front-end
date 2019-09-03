import { ADD_CONTACT } from '../actions/phonebookActions';

const initialState = {
  contacts: [{
    name: '',
    phone: '',
    address: ''
  }]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
  }
}

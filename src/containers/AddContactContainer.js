import { connect } from 'react-redux';
import AddContact from '../components/phonebook/AddContact';
import { addContact } from '../actions/phonebookActions';
// import createContact from '../services/contactsApi';

const mapDispatchToProps = dispatch => ({
  handleSubmit(event) {
    event.preventDefault();
    dispatch(addContact({
      fullname: event.target[0].value,
      phone: event.target[1].value,
      address: event.target[2].value
    }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddContact);

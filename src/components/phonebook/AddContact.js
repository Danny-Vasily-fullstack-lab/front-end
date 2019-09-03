import React from 'react';
import PropTypes from 'prop-types';

function AddContact({ handleSubmit, phone, name, address }) {
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} placeholder='Name'/>
      <input value={phone} placeholder='Phone'/>
      <input value={address} placeholder='Address'/>
      <button>Add Contact</button>
    </form>
  );
}

AddContact.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default AddContact;


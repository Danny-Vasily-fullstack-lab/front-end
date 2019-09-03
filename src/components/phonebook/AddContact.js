import React from 'react';
import PropTypes from 'prop-types';

function AddContact({ handleSubmit, phone, fullname, address }) {
  return (
    <form onSubmit={handleSubmit}>
      <input value={fullname} placeholder='Name'/>
      <input value={phone} placeholder='Phone'/>
      <input value={address} placeholder='Address'/>
      <button>Add Contact</button>
    </form>
  );
}

AddContact.propTypes = {
  handleSubmit: PropTypes.func,
  phone: PropTypes.string,
  fullname: PropTypes.string,
  address: PropTypes.string,
};

export default AddContact;


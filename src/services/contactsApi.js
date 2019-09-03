export const createContact = ({ fullname, phone, address }) => {
  return fetch('https://app-contacts.herokuapp.com/api/v1/contacts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ fullname, phone, address })
  })
  
    .then(res => {
      if(!res.ok) throw 'can not get contacts';
      return res.json();
    });
};

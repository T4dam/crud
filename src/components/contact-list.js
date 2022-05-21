import React from 'react';
import ContactCard from './contact-card';

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
         props.getContactId(id)
    }
    const renderContactsList = props.contacts.map((item, index) => {
        return (
          <ContactCard key={index} contacts={item} clickHandler={deleteContactHandler} />
        )
    })
  return (
      <>
    <div className='mt-12 font-bold text-lg mb-4'>Contact list</div>
    <div>
        {renderContactsList}
    </div>

      </>
  )
}

export default ContactList
import React from 'react';
import ContactCard from './contact-card';

const ContactList = (props) => {
    console.log(props)

    const renderContactsList = props.contacts.map(item => {
        return (
          <ContactCard contacts={item} />
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
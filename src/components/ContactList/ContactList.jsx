import React from 'react';
import { string, arrayOf, exact } from 'prop-types';

import styles from '../ContactForm/ContactForm.module.scss';

const ContactList = ({ contacts, onRemove }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => <li key={id}> {name}: {number}
        <section >
          <button type="submit" className={styles.button} onClick={() => onRemove(id)}>Delete</button>
        </section>
      </li>)}

    </ul>
  )
};

ContactList.defaultProps = {};

ContactList.propTypes = {
  contacts: arrayOf(exact({
    id: string.isRequired,
    name: string.isRequired,
    number: string.isRequired,
  })).isRequired,
};

export default ContactList;

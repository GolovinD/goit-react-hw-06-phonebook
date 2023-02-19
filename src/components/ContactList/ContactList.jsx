// import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem'
import css from './ContactList.module.css'

import { useSelector } from "react-redux";
import { getContacts } from 'redux/selectors';


const ContactList = () => {

    const contacts = useSelector(getContacts);

    return (
        <ul className={css.contacts}>
            {contacts.map(({ id, name, number })  => (
                <ContactItem
                    key={id} 
                    id={id}
                    name={name} 
                    number={number}              
                />
            ))}
        </ul>
    )
}

export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func,
// };
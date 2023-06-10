import { ListItem } from 'components/ContactItem/contactItem';
import PropTypes from 'prop-types';
import { List } from './contactList.styled';

export const ContactList = ({ contacts, delContact }) => {
    return (
        <List>
            <ListItem contacts={contacts} delContact={delContact}/>
        </List>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  delContact: PropTypes.func.isRequired,
};
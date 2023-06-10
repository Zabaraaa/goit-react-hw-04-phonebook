import PropTypes from 'prop-types';
import { Item, Thumb, Button } from './contactItem.styled'

export const ListItem = ({ contacts, delContact }) => {
    return contacts.map(({ id, name, number }) => (
        <Item key={id}>
            
            <Thumb>
                <p>{name}</p>
                <p>{number}</p>
            </Thumb>
            
            <Button type='button' onClick={() => delContact(id)}>Delete</Button>
        </Item>
    ))
}

ListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  delContact: PropTypes.func.isRequired,
};
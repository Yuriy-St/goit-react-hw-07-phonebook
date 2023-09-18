import PropTypes from 'prop-types';
import {
  DataBlock,
  DeleteBtn,
  Name,
  Phone,
  StyledContact,
} from './Contact.styled';
import { useDeleteContactByIdMutation } from 'redux/contactsApi';
export default function Contact({ id, name, phone }) {
  const [deleteContact] = useDeleteContactByIdMutation();

  return (
    <StyledContact>
      <DataBlock>
        <Name>{name}:</Name>
        <Phone>{phone}</Phone>
      </DataBlock>
      <DeleteBtn type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteBtn>
    </StyledContact>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

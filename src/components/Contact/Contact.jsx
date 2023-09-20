import PropTypes from 'prop-types';
import {
  DataBlock,
  DeleteBtn,
  Name,
  Phone,
  StyledContact,
} from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
export default function Contact({ id, name, phone }) {
  const dispatch = useDispatch();

  return (
    <StyledContact>
      <DataBlock>
        <Name>{name}:</Name>
        <Phone>{phone}</Phone>
      </DataBlock>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
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

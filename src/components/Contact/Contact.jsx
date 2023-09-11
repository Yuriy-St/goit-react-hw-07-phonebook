import PropTypes from 'prop-types';
import { DeleteBtn, StyledContact } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <StyledContact>
      <div>{name}:</div>
      <div>{number}</div>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact({ id }))}>
        Delete
      </DeleteBtn>
    </StyledContact>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

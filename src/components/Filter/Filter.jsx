import { FilterStyled } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <FilterStyled>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleChange} />
    </FilterStyled>
  );
}

import { FilterStyled } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

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

import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { selectFilter, setFilterValue } from '../../redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleFilter = e => {
    const value = e.target.value;
    dispatch(setFilterValue(value));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={handleFilter}
      value={filterValue}
    />
  );
};

export default Filter;

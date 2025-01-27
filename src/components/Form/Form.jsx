import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todos/todosSlice';
import { nanoid } from '@reduxjs/toolkit';

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const todo = e.target.elements.search.value.trim();
    const newTodo = {
      text: todo,
      id: nanoid(),
    };
    if (todo) {
      dispatch(addTodo(newTodo));
      e.target.reset();
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;

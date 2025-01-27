import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  disableCurrentTodo,
  editTodo,
  selectCurrentTodo,
} from '../../redux/todos/todosSlice';

const EditForm = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);

  const handleSubmit = e => {
    e.preventDefault();
    const updatedText = e.target.text.value;

    dispatch(editTodo({ id: currentTodo.id, text: updatedText }));
    dispatch(disableCurrentTodo());
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo?.text || ''}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => {
          dispatch(disableCurrentTodo());
        }}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;

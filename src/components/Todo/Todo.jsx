import Text from '../../components/Text/Text';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import {
  currentTodo,
  deleteTodo,
  editTodo,
} from '../../redux/todos/todosSlice';

const Todo = ({ id, text, counter }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = todoId => {
    dispatch(deleteTodo(todoId));
  };

  const handleEditTodo = todoId => {
    dispatch(currentTodo(todoId));
  };

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {counter + 1}
      </Text>

      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => {
          handleDeleteTodo(id);
        }}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        className={style.editButton}
        type="button"
        onClick={() => {
          handleEditTodo(id);
        }}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default Todo;

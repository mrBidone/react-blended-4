import { useSelector } from 'react-redux';
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import { selectCurrentTodo, selectTodos } from './redux/todos/todosSlice';
import TodoList from './components/TodoList/TodoList';
import Filter from './components/Filter/Filter';
import EditForm from './components/EditForm/EditForm';

export const App = () => {
  const todos = useSelector(selectTodos);
  const isEdit = useSelector(selectCurrentTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {!isEdit ? <Form /> : <EditForm />}
          {!isEdit && <Filter />}
          {todos.length === 0 ? (
            <Text textAlign="center">Create your first todo😉</Text>
          ) : (
            <TodoList />
          )}
        </Container>
        <Container></Container>
      </Section>
    </>
  );
};

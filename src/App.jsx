import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  const onAddTodos = todosText => {
    const newTodo = {
      id: nanoid(),
      text: todosText,
      completes: false,
    };
    dispatch(addTodo(newTodo));
  };

  const onDeleteTodos = todosId => {
    dispatch(deleteTodo(todosId));
  };

  const onEditTodo = todosId => {
    const newTodoText = prompt('Enter new task:');
    dispatch(editTodo({ id: todosId, todo: newTodoText }));
  };
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
        </Container>
        <Container>
          <Form onSubmit={onAddTodos} />
          {todos.length === 0 ? (
            <Text textAlign="center">There are no any todos...</Text>
          ) : (
            <TodoList
              todos={todos}
              onEditTodo={onEditTodo}
              onDeleteTodos={onDeleteTodos}
              onToogleComplete={onToogleComplete}
            ></TodoList>
          )}
        </Container>
      </Section>
    </>
  );
};

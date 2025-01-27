import { useSelector } from 'react-redux';
import Text from '../Text/Text';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import Todo from '../Todo/Todo';
import { selectFilteredTodos } from '../../redux/filter/filterSlice';

const TodoList = () => {
  const filteredTodos = useSelector(selectFilteredTodos);

  return (
    <>
      {filteredTodos.length === 0 ? (
        <Text textAlign="center">We did not find any todo😯</Text>
      ) : (
        <Grid>
          {filteredTodos.map(({ id, text }, index) => (
            <GridItem key={id}>
              <Todo id={id} text={text} counter={index} />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};

export default TodoList;

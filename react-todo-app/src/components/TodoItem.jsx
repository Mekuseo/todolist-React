import styles from '../components/styles/TodoItem.module.css';

const TodoItem = ({ itemProp }) => {
  return <li>{itemProp.title}</li>;
}; 
export default TodoItem;

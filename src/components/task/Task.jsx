import PropTypes from 'prop-types';
import { ListGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <span
        onClick={() => toggleTaskCompletion(task.id)}
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? 'gray' : 'black',
          cursor: 'pointer',
          flexGrow: 1
        }}
      >
        {task.text}
      </span>
      <div>
        <Button
          variant= "light"
          onClick={() => toggleTaskCompletion(task.id)}
          className="mr-2"
          style={{ color: task.completed ? 'black' : 'lightgreen' }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </Button>
        <Button variant="danger" onClick={() => deleteTask(task.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </ListGroup.Item>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;

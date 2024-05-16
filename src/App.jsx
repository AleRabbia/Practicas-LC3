import { useState } from "react";
import TaskList from './components/taskList/TaskList';
import AddTask from './components/addTask/AddTask';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h1 className="text-center">Manager de Tareas Personales</h1>
          <AddTask addTask={addTask} />
          <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
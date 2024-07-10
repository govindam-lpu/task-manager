import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import { firestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from './firebase';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksCollection = collection(firestore, 'tasks');
      const tasksSnapshot = await getDocs(tasksCollection);
      const tasksData = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTasks(tasksData);
      console.log(tasksData); 
    };

    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const tasksCollection = collection(firestore, 'tasks');
    await addDoc(tasksCollection, task);
    const tasksSnapshot = await getDocs(tasksCollection);
    const tasksData = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTasks(tasksData);
  };

  const updateTask = async (id, status) => {
    const taskDoc = doc(firestore, 'tasks', id);
    await updateDoc(taskDoc, { status });
    const tasksCollection = collection(firestore, 'tasks');
    const tasksSnapshot = await getDocs(tasksCollection);
    const tasksData = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTasks(tasksData);
  };

  const deleteTask = async (id) => {
    const taskDoc = doc(firestore, 'tasks', id);
    await deleteDoc(taskDoc);
    const tasksCollection = collection(firestore, 'tasks');
    const tasksSnapshot = await getDocs(tasksCollection);
    const tasksData = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTasks(tasksData);
  };

  const filteredTasks = tasks.filter(task => 
    filter === 'All' || task.status === filter
  );

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;

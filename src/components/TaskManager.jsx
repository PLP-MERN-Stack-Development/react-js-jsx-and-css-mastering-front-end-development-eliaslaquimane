import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import useLocalStorageTasks from '../hooks/useLocalStorege';

const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask, editTask } = useLocalStorageTasks();
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  // Filter tasks by status
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  // Handle new task submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    setLoading(true);
    // If addTask is async, just await it
    await new Promise((resolve) => setTimeout(resolve, 800)); 
    addTask(newTaskText);
    setNewTaskText('');
    setLoading(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Task Manager</h2>

      {/* Add Task Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? 'Adding...' : 'Add Task'}
          </Button>

          {/* Spinner animation when loading */}
          <AnimatePresence>
            {loading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
              ></motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4">
        {['all', 'active', 'completed'].map((f) => (
          <Button
            key={f}
            variant={filter === f ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        <AnimatePresence>
          {filteredTasks.length === 0 ? (
            <motion.li
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-500 dark:text-gray-400 text-center py-4"
            >
              No tasks found
            </motion.li>
          ) : (
            filteredTasks.map((task) => (
              <motion.li
                key={task.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span
                    className={`${
                      task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <div className="pr-2 flex gap-2">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteTask(task.id)}
                    aria-label="Delete task"
                  >
                    Delete
                  </Button>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() =>
                      editTask({
                        id: task.id,
                        newText: prompt('Edit task', task.text) || task.text,
                      })
                    }
                    aria-label="Edit task"
                  >
                    Edit
                  </Button>
                </div>
              </motion.li>
            ))
          )}
        </AnimatePresence>
      </ul>

      {/* Task Stats */}
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        <p>{tasks.filter((task) => !task.completed).length} tasks remaining</p>
      </div>
    </div>
  );
};

export default TaskManager;

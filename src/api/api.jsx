// task API functions

export async function fetchTasks() {
  // Implementation for fetching tasks from an API
  const res = await fetch('https://shrimo.com/fake-api/todos');
  const data = await res.json();
  return data;
}

export async function createTask(task) {
  // Implementation for creating a new task via an API
  const res = await fetch('https://shrimo.com/fake-api/todos', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  const data = await res.json();
  return data;
}

export async function updateTask(taskId, updates) {
  // Implementation for updating a task via an API
  const res = await fetch(`https://shrimo.com/fake-api/todos/${taskId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  });
  const data = await res.json();
  return data;
}

export async function deleteTask(taskId) {
  // Implementation for deleting a task via an API
  const res = await fetch(`https://shrimo.com/fake-api/todos/${taskId}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  return data;
}
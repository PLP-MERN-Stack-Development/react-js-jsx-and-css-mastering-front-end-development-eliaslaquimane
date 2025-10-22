import React from "react";
import TaskManager from "../components/TaskManager";
import { fetchTasks } from "./../api/api";
import Button from "../components/Button";

function Manage() {

  const [apiData, setApiData] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const data = await fetchTasks();
      setApiData(data);
    }
    getData();
  }, []);

  // Create a search feature to filter the API results
  const [searchTerm, setSearchTerm] = React.useState('');
  const filteredTasks = apiData ? apiData.filter(task => {
    //TypeError: can't access property "toLowerCase", task.text is undefined
    if (!task.text) return false;
    return task.text.toLowerCase().includes(searchTerm.toLowerCase());
  }) : [];

  return (
     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar component will go here */}

      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">PLP Task Manager</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
                
            {/* TaskManager component */}
            <TaskManager />
          </div>
        </div>
        
        {/* API data display will go here */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <p className="text-gray-500 dark:text-gray-400">
              Fetch and display data from an API here
          </p>
          {/* Fetch and display data from an API here */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Fetched Data:</h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              {/* Display the fetched API data here */}
              {JSON.stringify(apiData, null, 2)}
              </pre>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search tasks..."
              className="mt-4 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              {/* Display the filtered API data here */}
              {JSON.stringify(filteredTasks, null, 2)}
            </pre>
          </div>  
        </div>
      </main>
    </div>
  );
}

export default Manage;

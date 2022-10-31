import { useState, useEffect } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const placeholderTask = {
    id: 0,
    name: "Task 1",
    completed: false,
  };

  const placeholderTodos = [
    {
      id: 1,
      name: "Todos 1",
      todos: [placeholderTask],
      completed: false,
    },
  ];

  // newTodoList function to add a new todo list
  const newTodoList = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        name: e.target[0].value,
        tasks: [],
      },
    ]);
    e.target.reset();
    console.table(todos);
  };

  // deleteTodoList function to delete a todo list
  const deleteTodoList = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // addTask function to add a new todo
  const addTask = (e, id) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.tasks.push({
            id: todo.tasks.length + 1,
            name: e.target[0].value,
            completed: false,
          });
        }
        return todo;
      })
    );
    e.target.reset();
    console.log(todos);
  };

  // deleteTask function to delete a todo
  const deleteTask = (todoId, taskId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          todo.tasks = todo.tasks.filter((task) => task.id !== taskId);
        }
        return todo;
      })
    );
  };

  const handleTodosNameChange = (e, key) => {
    // change the Todos.name value
    const newTodos = [...todos];
    newTodos.find((todo) => todo.id === key).name = e.target.value;
    setTodos(newTodos);
  };

  return (
    <>
      <h1 className="mb-10 text-center text-5xl font-black text-slate-900">
        To Geeka do
      </h1>
      <form className="mx-auto w-1/3" onSubmit={(e) => newTodoList(e)}>
        <input
          className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          placeholder="Todos List"
        />
      </form>
      <ul className="group relative flex flex-wrap justify-center gap-5 transition-all duration-500">
        {todos.map((todos) => (
          <li
            key={todos.id}
            className={`relative ${
              todos.completed ? "bg-emerald-200 line-through" : "bg-slate-200"
            } top-0 left-0 flex h-fit w-96 flex-col justify-between rounded-lg bg-slate-200 pb-0 font-sans accent-slate-200 shadow-md transition-all duration-500 hover:z-50 hover:shadow-2xl`}
          >
            <div className="flex justify-between">
              {/* editable todos name */}
              <div className="flex items-center gap-3">
                <input
                  className="border-0 bg-transparent text-xl font-bold text-slate-500 focus:ring-0"
                  type="text"
                  placeholder="Todos List"
                  value={todos.name}
                  onChange={(e) => handleTodosNameChange(e, todos.id)}
                />
              </div>
              {/* x button to delete todos */}
              <button className="mr-3" onClick={() => deleteTodoList(todos.id)}>
                <svg
                  className="h-6 w-6 text-slate-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* todo */}
            <ul className="flex flex-col gap-3">
              {todos.tasks.map((task) => (
                <li
                  key={task.id}
                  className={`flex select-none items-center justify-center ${
                    todos.tasks.completed
                      ? "bg-slate-500/50 line-through"
                      : "bg-slate-500"
                  } py-1 px-4 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:rounded-md`}
                >
                  <label
                    // onClick={() => toggleComplete(todo.id, todos.id)}
                    className="w-full  cursor-no-drop border-0 bg-transparent p-2 text-base font-black text-slate-50 first-letter:uppercase"
                  >
                    {task.name}
                  </label>
                  <button
                    onClick={() => deleteTask(todos.id, task.id)}
                    className="h-6 w-6 text-slate-200"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
            <form onSubmit={(e) => addTask(e, todos.id)}>
              <input
                className="w-full rounded-b-md border-0 bg-transparent px-3 py-2 leading-tight text-slate-700 backdrop-blur-sm transition-all duration-300 hover:bg-slate-400/50 focus:translate-y-4 focus:scale-105 focus:rounded-md focus:bg-slate-400/50 focus:outline-none focus:ring-0 focus:ring-offset-0"
                type="text"
                placeholder="Task List"
              />
            </form>
          </li>
        ))}
      </ul>
      {/* modal that ask for a new todos name */}
      <div
        className={`${
          modalOpen ? "fixed" : "hidden"
        } inset-0 z-50 flex items-center justify-center`}
      >
        <div
          onClick={() => setModalOpen(false)}
          className="absolute inset-0 z-10 bg-black/20 "
        ></div>
        <div className="z-20 rounded-lg bg-white p-5 shadow-2xl shadow-white/60">
          <div className="relative mb-2">
            <h1 className="text-xl font-bold text-slate-900">New List</h1>
            {/* close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-0 right-0 mt-1 mr-2"
            >
              <svg
                className="h-6 w-6 text-slate-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <form
            onSubmit={(e) => newTodoList(e)}
            className="flex items-center justify-end gap-3"
          >
            <label className="mb-2 block w-full text-sm font-bold text-gray-700">
              {/* List Name */}
              <input
                className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                type="text"
                placeholder="Todos List"
              />
            </label>
            {/* <button
              type="submit"
              className="h-fit min-w-fit rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Add List
            </button> */}
          </form>
        </div>
      </div>
    </>
  );
}

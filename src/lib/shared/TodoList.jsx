import { useState, useEffect } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const placeholderTodo = {
    id: 1,
    task: "Todo 1",
    completed: false,
    steps: [
      {
        id: 1,
        task: "Step 1",
        completed: false,
      },
      {
        id: 2,
        task: "Step 2",
        completed: false,
      },
    ],
  };

  const placeholderTodos = [
    {
      id: 1,
      name: "Todos 1",
      todos: [placeholderTodo],
      completed: false,
    },
  ];
  const newTodos = (e) => {
    e.preventDefault();
    const newTodos = [...todos];
    newTodos.push({
      id: newTodos.length + 1,
      name: e.target[0].value,
      todos: [placeholderTodos],
    });
    e.target.reset();
    setTodos(newTodos);
  };

  const newTodo = (e, id) => {
    e.preventDefault();
    const newTodos = [...todos];
    const newTodo = {
      id: newTodos[id - 1].todos.length + 1,
      task: e.target[0].value,
      completed: false,
      steps: [],
    };
    newTodos[id - 1].todos.push(newTodo);
    e.target.reset();
    setTodos(newTodos);
    console.log(newTodos);
  };

  const toggleComplete = (id, todoId) => {
    const newTodos = [...todos];
    newTodos[id - 1].todos[todoId - 1].completed =
      !newTodos[id - 1].todos[todoId - 1].completed;

    // if all todos are completed, set the list to completed
    newTodos[id - 1].completed = newTodos[id - 1].todos.every(
      (todo) => todo.completed
    );
    setTodos(newTodos);
  };

  // deleteList
  const deleteTodos = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleTodosNameChange = (e, key) => {
    // change the Todos.name value
    const newTodos = [...todos];
    newTodos.find((todo) => todo.id === key).name = e.target.value;
    setTodos(newTodos);
  };

  useEffect(() => {
    // if there is no todos in localStorage, set it to placeholderTodos

    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify(placeholderTodos));
    }

    setTodos(JSON.parse(localStorage.getItem("todos")));
    // if there is no todos in state, set it to placeholderTodos
    if (!todos.length) {
      console.log(todos.length, "no todos");
      setTodos(placeholderTodos);
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, []);

  return (
    <>
      <h1 className="mb-10 text-center text-5xl font-black text-slate-900">
        To Geeka do
      </h1>
      {/* add new todo */}
      <div className="">
        <div className="flex items-center justify-end gap-3">
          <label className="mb-2 block w-full text-sm font-bold text-gray-700">
            Todos List
            <select
              id="todos-list"
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            >
              {todos.map((todos) => (
                <option key={todos.id} value={todos.id}>
                  {todos.name}
                </option>
              ))}
            </select>
          </label>
          <button
            onClick={() => setModalOpen(true)}
            className="h-fit min-w-fit rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            New List
          </button>
        </div>
        <div className="flex items-center justify-end gap-3">
          <label className="mb-2 block w-full text-sm font-bold text-gray-700">
            Todo
            <input
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="text"
              placeholder="Todo"
            />
          </label>
          <button className="h-fit min-w-fit rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Add Todo
          </button>
        </div>
      </div>
      {/* todos list */}
      <form onSubmit={newTodos}>
        <input
          className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          placeholder="Todos List"
        />
      </form>
      <div className="group relative flex flex-wrap justify-center gap-5 transition-all duration-500">
        {todos.map((todos) => (
          <ul
            key={todos.id}
            className={`relative ${
              todos.completed ? "bg-emerald-200" : "bg-slate-200"
            } top-0 left-0 flex h-fit w-96 flex-col justify-between gap-5 overflow-hidden rounded-lg bg-slate-200 pb-0 font-sans accent-slate-200 shadow-md transition-all duration-500 hover:z-50 hover:shadow-2xl`}
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
              <button onClick={() => deleteTodos(todos.id)}>
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
            {todos.todos.map((todo) => (
              <li
                onClick={() => toggleComplete(todo.id, todos.id)}
                key={todo.id}
                className={`flex select-none items-center justify-center gap-2 ${
                  todo.completed
                    ? "bg-slate-500/50 line-through"
                    : "bg-slate-500"
                } py-1 px-4 shadow-sm  transition-all hover:scale-[1.01]`}
              >
                <label className="w-full cursor-no-drop border-0 bg-transparent p-2 text-base font-black text-slate-50">
                  {todo.task} + ss
                </label>
                <button
                  onClick={() => deleteTodoItem(todo.id, todos.id)}
                  className="h-6 w-6 text-slate-900"
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
              </li>
            ))}
            <form key={todos.id} onSubmit={(e) => newTodo(e, todos.id)}>
              <input
                className="w-full border-0  bg-slate-400/50 px-3 py-2 leading-tight text-slate-700 focus:outline-none focus:ring-0 focus:ring-offset-0"
                type="text"
                placeholder="Todos List"
              />
            </form>
          </ul>
        ))}
      </div>
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
            onSubmit={newTodos}
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

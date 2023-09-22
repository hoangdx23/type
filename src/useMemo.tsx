/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useEffect, useMemo } from 'react';

type ITodo = {
  id: number;
  title: string;
  completed: boolean;
};

const initTodo: ITodo[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: `todo ${index + 1}`,
  completed: index > 10,
}));

const Memo = () => {
  // const [todoState, setTodoState] = useState<ITodo[]>(initTodo);
  const [tab, setTab] = useState<string>('all');
  const filterTodos = (todos: ITodo[], tab: string) => {
    if (tab === 'all') {
      return todos;
    } else if (tab === 'active') {
      return todos.filter((todo) => !todo.completed);
    } else {
      return todos.filter((todo) => todo.completed);
    }
  };

  // useEffect(() => {
  //   setTodoState(initTodo);
  // }, [initTodo, tab]);

  const visibleTodos = useMemo(() => filterTodos(initTodo,tab), [initTodo, tab]);
  return (
    <div>
      <div>
        <button onClick={() => setTab('all')}>All</button>
        <button onClick={() => setTab('active')}>Active</button>
        <button onClick={() => setTab('completed')}>Completed</button>
      </div>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Memo;
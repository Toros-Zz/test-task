import { memo, useCallback, useState } from 'react';
import { CenteredLayout } from '~/components';
import { useRenderHighlight } from '~/utils';
import css from './optimize-1.module.scss';

const todosData = [
  { id: 1, text: 'run a marathon', done: false },
  { id: 2, text: 'ride an elephant', done: false },
  { id: 3, text: 'swim with a fish', done: false },
];

// ✓ TODO Fix all list re-rendering when only one component is changed :(

interface TodoProps {
  id: number;
  text: string;
  done: boolean;
  onClick: () => void;
}

const Todo = memo(({ id, text, done, onClick }: TodoProps) => {
  const ref = useRenderHighlight(css.render);

  return (
    <li
      ref={ref}
      onClick={() => {
        onClick(id);
      }}
      className={css.listItem}
    >
      {done ? '[x]' : '[ ]'} {text}
    </li>
  );
});

export const Optimize1 = () => {
  const [todos, setTodos] = useState(todosData);

  const handleTodoClick = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id !== id ? todo : { ...todo, done: !todo.done })),
    );
  }, []);

  return (
    <CenteredLayout className="gap-4">
      <div className="text-3xl">It re-renders all items! =\</div>
      <div>We need to fix that</div>
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            text={item.text}
            done={item.done}
            onClick={handleTodoClick}
          />
        ))}
      </ul>
    </CenteredLayout>
  );
};

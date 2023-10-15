import React from 'react'
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

// const InputField: React.FC<Props> = ({ todo, setTodo })
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="input" onSubmit={(e) => handleAdd(e)}>
      <input 
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input__box"
        name=""
        id=""
      />
      <button type="submit" className="input__submit">Go</button>
    </form>
  )
}

export default InputField
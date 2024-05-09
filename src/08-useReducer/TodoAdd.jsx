import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {

    const { description, onInputChange, onResetForm} = useForm({
        description: ''
    })

    const onFormSubmit = (e) => {
        e.preventDefault();
      
        if (description.length <= 1 ) return;
        const newTodo =  {
          id: new Date().getTime(),
          description,
          done: false,
        }

        onNewTodo(newTodo);
        onResetForm();
      }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        name="description"
        onChange={onInputChange}
        value={description}
      />
      <button type="submit" className="btn btn-primary mt-2">
        Agregar
      </button>
    </form>
  );
};

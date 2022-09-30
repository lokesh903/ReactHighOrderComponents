import React from 'react'
import HOC from './HOC'

const Todos = ({data}) => {

    let filered_data = data.map((todo) => {
        return (
            <div key={todo.id}>
                <p>
                    <strong> {todo.title} </strong>
                </p>
            </div>
        )
    })
  return (
    <div>
      {filered_data}
    </div>
  )
}

const HocTodos = HOC(Todos, "todos")
export default HocTodos
import React from 'react';

export default function List(props) {
  return (
    <div className="todo-list">
      {props.lists.map(list => {
        return (
          <div className="list" key={list.id}>
            <div className="text">
              {list.text}
              <button className="delete" onClick={() => props.handleDelete(list)}>削除</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
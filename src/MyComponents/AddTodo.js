import React, { useState } from 'react'


const AddTodo = ({ add }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {

    e.preventDefault();
    if (!title || !desc) {
      alert("title and desc cant blank")

    }
    else {
      add(title, desc)
    }

  }
  return (
    <div className="container my-3">
      <form onSubmit={submit}>
        <div className="mb-3">
          <h3>React Form add a todo</h3>
          <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
          <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Todo description</label>
          <input className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} id="exampleInputPassword1" />
        </div>

        <button type="submit" className="btn btn-sm btn-success">Add</button>
      </form>
    </div>
  )
}

export default AddTodo

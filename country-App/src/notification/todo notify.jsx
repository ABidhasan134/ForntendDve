import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Todonotify() {
    const handelAdd=()=>{
        toast("work is added");

    }
    const handelfind=()=>{
            toast("finding the job")
    }
  return (
    <div>
      <h1>hello form notify</h1>
      <button onClick={handelAdd}>Add work</button>
      <button onClick={handelfind}>find</button>
      <ToastContainer/>
    </div>
  )
}

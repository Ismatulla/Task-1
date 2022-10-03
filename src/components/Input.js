import {useState} from 'react'

function Input() {

const [input,setInput] = useState('')

  const inputHandler=(e)=>{
setInput(e.target.value)
  }

  const submitHandler=(e)=>{
    e.preventDefault()
    setInput('')
  }
  return (
    <form
    onSubmit={submitHandler}
    >
    <div className='bg-white px-4 py-4  mb-8  '>
      <div className="rounded-lg flex items-center justify-start">
      <div className='   h-14 w-14  border-white rounded-full overflow-hidden  '>
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="not found"
          className='object-cover w-full h-full '
        />
      </div>
      <div className="container flex relative justify-between items-center rounded-full lg:mr-80 w-3/5 py-2 bg-gray-200  ">
      <input
   onChange={inputHandler}
   value={input}
      className=" rounded-full   bg-gray-200 col-span-8 input p-1"/>
      <button
      type='submit'
      className="absolute right-1 flex items-center justify-center bg-gray-400 input_icon">
        <i className="fa-regular fa-paper-plane"/>
      </button>
      </div>
      </div>
    </div>
    </form>
  );
}

export default Input;
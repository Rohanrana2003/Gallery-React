import { useState, useRef } from "react";
import Comment from "./constants/components/comment";

function App() {

  const [commentContainer, setCommentContainer] = useState([
    {
      user:"Matt",
      desc:"Artistic"
    },
    {
      user:"Rohan",
      desc:"Nice Interview going"
    },
  ]);

  const input = useRef();

  const handleReply = () =>{
    setCommentContainer([...commentContainer ,{user:'ROHAN', desc:input.current.value}])
    console.log(commentContainer)
    input.current.value = null;
  }



  return (
    <>

    <div className=" bg-slate-600 flex w-screen h-screen justify-center items-center">

      <div className="  m-auto w-[50%] h-[90%] bg-white">

        <h1 className=" font-bold mx-6 my-4 underline text-xl ">Comments</h1>

        <div className="px-7  h-[40%] overflow-y-auto">
          {
            commentContainer.map((comment, i) => (
              <Comment key={i} name={comment.user} desc={comment.desc} value={input.current.value}/>
            ))
          }
        </div>

        <textarea ref={input} type="text" className="mx-10 border border-black border-1  w-[90%] h-[35%] p-4"></textarea>

        <button onClick={handleReply} className="mx-16 my-5 bg-slate-600 text-white p-2 rounded-lg">Reply</button>
      </div>

      

    </div>



    </>
  )
}

export default App

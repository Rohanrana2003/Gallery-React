/* eslint-disable react/prop-types */


const Comment = ({ name, desc}) => {
  return (
    <div className="m-3">

        <h1 className="font-bold">{name}</h1>
        <p className="px-3">{desc}</p>
        <button className="pl-3 text-gray-500 text-sm">reply</button>
    </div>
  )
}

export default Comment

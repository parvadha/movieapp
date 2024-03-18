import './App.css';
import {useState} from 'react'

function App()
 {
  const [name,setName]=useState("")
  const [pic,setPic]=useState("")
  
  const [users,setUsers]=useState([
    {name:"Nagavalli",pic:"https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710460800&semt=ais"},
    {name:"Bhavani",pic:"https://c8.alamy.com/comp/TACMXH/three-red-rose-flower-buds-and-petals-from-a-vase-TACMXH.jpg"},
    {name:"Devi",pic:"https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?cs=srgb&dl=pexels-pixabay-87452.jpg&fm=jpg"}
  ])

  function addUser()
  {
    setUsers([...users,{name,pic}])
  }
  return (
    <div className="App">
      
     <Msg users={users}/>

    <h1>Welcome {name}</h1>
     <input placeholder='Enter Name' onChange={(e)=>{
      setName(e.target.value)}}/>
      <input placeholder='Profile pic' onChange={(e)=>{
      setPic(e.target.value)}}/>
     <button onClick={addUser}>add user</button>

    </div>
  );
}

//component name first letter must be capital
//return JSX elements
function Msg({users})
{
  //Js code
  //JSX starts
  return(
    users.map(user=>
      <div className='msg' id={user.name}>
        <img src={user.pic} className='profile'/>
        <h3>Hello {user.name} ⭐👌🍿!!!</h3>
    </div>
    )
  )
  //JSX ends
}

export default App;

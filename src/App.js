import './App.css';

function App() {
  
  return (
    <div className="App">
     <Msg name="Nagavalli" pic="https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710460800&semt=ais"/>
     <Msg name="Bhavani" pic="https://c8.alamy.com/comp/TACMXH/three-red-rose-flower-buds-and-petals-from-a-vase-TACMXH.jpg"/>
     <Msg name="Devi" pic="https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?cs=srgb&dl=pexels-pixabay-87452.jpg&fm=jpg"/>

    </div>
  );
}

//component name first letter must be capital
//return JSX elements
function Msg(props)
{
  //Js code
  //JSX starts
  return(
    <div className='msg'>
      <img src={props.pic} className='profile'/>
      <h3>Hello {props.name} ⭐👌🍿!!!</h3>
    </div>
  )
  //JSX ends
}

export default App;

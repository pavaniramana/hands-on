
import Tweet from './Sweet-Tweet/Tweet';
import './index.css'

const content1 ={
  author : {
    name:"pavani",
    handle:"love coding"
  },
  message:"Good morning everyone"
}
const content2 ={
  author : {
    name:"mamatha",
    handle:"love cooking"
  },
  message:"Nice Food Here Everyone"
}
const content3 ={
  author : {
    name:"Naga JYothi",
    handle:"love farming"
  },
  message:"I am Proud myself"
}

function App() {
  console.log(content1);
  return (
    <div className='box'>
      <Tweet data= {content1}/>
      <Tweet data= {content2}/>
      <Tweet data= {content3}/>

     
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const product =[
    {name: 'photoshop',price : '$44.66'},
    {name:'ilustrator',price :'$66.55'},
    {name :'pdf reader',price:'$33.55'},
    {name :'new ',price:'$333.55'}
  ]
  const nayoks =['razzak','rubel','bapparaj','shakib khan','kuddos khan']
  const friendDetails = [
    {name :'Bettal',id :123,dept : 'CSE'},
    {name :'kala sohan',id :222,dept :'EEE'},
    {name :'Tushar',id :333,dept :'CSE'},
    {name : 'Nadia',id :3445,dept : 'English'}
  ]
 
  return (
    <div className="App">
      <header className="App-header">

        <Users></Users>
        <Counter></Counter>
        {
          friendDetails.map(fd => <Friend friend ={fd}></Friend>)
        }

        
        <ul>
          {
            nayoks.map( nk => <li>{nk}</li>)
  
          }
          {
          product.map(pr => <li>{pr.price}</li>)
          }
        </ul>

        {
          product.map(pd=><Product productDetails={pd}></Product>)
        }
        

        {/* <Product name={product[0].name} price={product[0].price}></Product>
        <Product name ={product[1].name} price={product[1].price}></Product> */}
        {/* <Product name={product[2]}></Product>
        <Product name={product[1]}></Product>
        <Product name={product[0]}></Product> */}

        <Person name="kalam khan" message="i am a web designer."></Person>
        <Person name ="sakib al hasan" message="i am a cricketer ."></Person>
        <Person name="abdul kuddos ali" message="i am a ajaira public"></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data) )
    
  },[])
  return(
    
    <div>
      <h3>Dynamic Users : {users.length} </h3>
      <ul>
        {
          users.map(user =><li>{user.name} : <p>{user.phone}</p> </li>)
        }
      </ul>
    </div>
  )
}

function Counter (){
  const[count,setCount] = useState(0)
    // const IncreaseHandler = () => {
    //   const newCount = count + 1;
    //   setCount(newCount);
    // }
    // const dicreaseHandler = () => {
    //   const newCount = count - 1;
    //   setCount(newCount);
    // }
    const handleIncrease = () => setCount(count +1 );
   
      const handleDiscrease = () => {
        if (count > 0) {
          setCount(count - 1)
          
        }
      };
  
  return(
    <div>
      <h2>Count : {count} </h2>
      <button onClick={handleDiscrease}>Dicrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Friend(props){
  const FriendStyle = {
    backgroundColor : 'yellow',
    border :'1px solid black',
    borderRadius : '5px',
    width : '600px',
    margin : '20px'
  }
  return(
    <div style={FriendStyle}>
      <h3>Name : {props.friend.name} </h3>
     <h4>Id : {props.friend.id}</h4>
      <h4> Dept : {props.friend.dept} </h4>
    </div>
  )

}

function Product(props){
  const productStyle = {
    border : '1px solid red',
    backgroundColor : 'lightgray',
    padding : '20px',
    float : 'left',
    color : 'white',
    width :'300px'
  }
  return (
    <div style={productStyle}>
      <h3>{props.productDetails.name}</h3>
      <h5>{props.productDetails.price}</h5>
      <button>BUY NOW</button>
    </div>
  )
}

function Person(props){
  var personStyle = {
   padding :'10px',
   margin : '10px',
   background :'gray',
   borderRadius : '10px',
   width : '600px'

  }
  return (
    <div style ={personStyle}>
      <h2>Name :{props.name}</h2>
  <p> profesion : {props.message}</p>
    </div>
  )
}
export default App;

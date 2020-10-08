import React, {useState, useEffect, PureComponent} from 'react';
import './App.css';
import {AppContext, defaultObject} from './AppContext';
import UserInfo from './UserInfo';
import Button from './Button';

//ReactContext
class App extends PureComponent {

  state = {
    isUserLogged: defaultObject.isUserLogged,
  }

 

  render() {
    return (
    <>
      <AppContext.Provider value={{
        isUserLogged: this.state.isUserLogged,
        toggleLoggedState: this.handleToggleStateIsLogged,
      }}>
        <h1>Hello</h1>
        <UserInfo />
        <Button />
      </AppContext.Provider>
    </>
    )
  }

 handleToggleStateIsLogged = () => 
 this.setState(prevState => ({isUserLogged: !prevState.isUserLogged}));
  
}








// useEffect() and useState()

// const App = () => {

//   const [counter, setCounter] = useState(0);
//   const [isActive, setIsActive] = useState(true);

//   const handler = () => setCounter( counter + 1); 

//   // const handleAdd = () => setCounter(prevValue => prevValue + 1); 

//   const toggleVisibilityCounter = () => setIsActive(prevValue => !prevValue)

//   // useEffect(() => {
//   //   // alert('Hello')
//   // }, []);

//   const counterComponent = isActive ? <Counter rerenderCounter={counter}/> : null;

//   return (
//     <>
//       <h1>Licznik </h1>
//       <button onClick={handler}>Przerenderuj komponent</button>
//       <button onClick={toggleVisibilityCounter}>Pokaż/ukryj komponent</button>
//       {/* <p>{counter}</p> */}
//       {/* {isActive && <Counter />} */}
//       {counterComponent}
//     </>
//   );
// }

// const Counter = ({rerenderCounter}) => {

//   const [counter, setCounter] = useState(0);
  
//   const handleMouseMove = e => setCounter(e.clientX);
  
//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
  
//     return () => {
//       alert('Komponent jest odmontowywany')
//       window.removeEventListener('mousemove', handleMouseMove)
//     }
//   }, [rerenderCounter])
  
//     return (
//       <div>
//         <p>{counter}</p>
//         <p>{rerenderCounter}</p>
//       </div>
//     )
//   }


export default App;

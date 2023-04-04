import './index.css';
import Logo from './logo.svg';

function App() {

  function OpenUrl(){
    window.open("https://twitter.com/intent/tweet?text=I%27m%20verifying%20my%20ability%20in%20the%20science%20of%20potions%20to%20become%20a%20beta%20tester%20of%20%40SwapPotion.%20%F0%9F%A7%AA&")
  }
  return (
    <div className="wrapper">
      <img src={Logo}></img>
      <div className='buff'>

        <div className="bruv">
          <h4>Lending the next wave of interoperability</h4>
          <h1>An Omnichain </h1>
          <h1>Liquidity Platform</h1>
          <button onClick={OpenUrl}>Apply for Beta</button>
        </div>


      </div>

      
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import logo from './images/calcuic-logo.png';
import BudgetComponent from './BudgetComponent';
import CommissionComponent from './CommissionComponent';
import TipComponent from './TipComponent';
import BMIComponent from './BMIComponent';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('ButtonsComponent');

    const handleToggle = (component) => {
        setActiveComponent(component);
    };

    const handleStateChange = (newState) => {
      setActiveComponent(newState);
    };

    //console.log('Component has changed:', activeComponent)

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo mt-3 mb-1' alt='logo' />
        <div className='typewriter'>
          <h5 className='dogica-font-face'>Calcuic</h5>
        </div>
        <h6 className='slogan mt-0'>Quick & Useful Calculator</h6> 
        {activeComponent === 'ButtonsComponent' && 
        <>
            <h6 className='mt-4 mb-0 title-headers'><strong>MONEY & FINANCES</strong></h6>
            <button className='buttons' onClick={() => handleToggle('BudgetComponent')}>Budget</button>
            <button className='buttons' onClick={() => handleToggle('CommissionComponent')}>Commission</button>
            <button className='buttons'>Discount</button>
            <button className='buttons'>Loans</button>
            <button className='buttons' onClick={() => handleToggle('TipComponent')}>Tip</button>
            <h6 className='mt-4 mb-0 title-headers'><strong>HEALTH & FITNESS</strong></h6>
            <button className='buttons' onClick={() => handleToggle('BMIComponent')}>BMI</button>
            <button className='buttons'>Calories</button>
        </>
        }
        {activeComponent === 'BudgetComponent' && <BudgetComponent showButtons={handleStateChange}/>}
        {activeComponent === 'CommissionComponent' && <CommissionComponent showButtons={handleStateChange}/>}
        {activeComponent === 'TipComponent' && <TipComponent showButtons={handleStateChange}/>}
        {activeComponent === 'BMIComponent' && <BMIComponent showButtons={handleStateChange}/>}
      </header>
      <footer className='footer mt-0'>Made with <span className='heart'>♥</span> in NYC</footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Global.css';
import './ButtonsComponent.css';

function ButtonsComponent() {
    const [activeComponent, setActiveComponent] = useState('ButtonsComponent');

    const handleToggle = (component, ) => {
        setActiveComponent(component);
        //new code
        sendToggleData();
    };

    const sendToggleData = ( { onToggle } ) => {
        onToggle(activeComponent);
    }

    return (
        <>
            <h6 className='mt-5 mb-0 title-headers'><strong>MONEY & FINANCES</strong></h6>
            <button className='buttons' onClick={() => handleToggle('BudgetComponent')}>Budget</button>
            <button className='buttons'>Commission</button>
            <button className='buttons'>Discount</button>
            <button className='buttons'>Loans</button>
            <button className='buttons'>Tip</button>
            <h6 className='mt-4 mb-0 title-headers'><strong>HEALTH & FITNESS</strong></h6>
            <button className='buttons'>BMI</button>
            <button className='buttons'>Calories</button>
        </>
    );
}

export default ButtonsComponent;
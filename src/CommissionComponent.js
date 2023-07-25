import React, { useState } from 'react';
import closeButton from './images/oval-close-button.svg';
import './Global.css';
import './CommissionComponent.css';


function CommissionComponent({ showButtons }) {
    const [sales, seSales] = useState('');
    const [commission, setCommission] = useState('');
    const [basePay, setBasePay] = useState('');

     //Form validation & results card slide-down effect
     const [isFormValid, setIsFormValid] = useState(false);
     const [slidedown, setSlidedown] = useState(false);

    //Toggle between Main Buttons & Components 
    const handleClick = () => {
        const newState = 'ButtonsComponent';
        showButtons(newState);
    };
    //Trigger Rerults Card slide-down effect
    const handleSlidedown = () => {
        setSlidedown(true);
    };

    return (
        <>
            <div className='card mt-4'>
                <div className='card-header mt-2'>
                    <h6 ><strong>Commission Calculator</strong></h6>
                        <img className='p-0 m-0 close-button' src={closeButton} alt='close-button'  onClick={handleClick} aria-label='Close alert' type='button' data-close />
                </div>
                <form className='my-3 '>
                    <div className='row'>
                        {/* <div className='label col-4 col-md-4 my-0 p-0 d-flex justify-content-end align-items-end'>
                            <label className='form-label  me-1' for='sales'>Sales:</label> 
                        </div> */}
                        <div className='col-12 px-0 d-flex justify-content-center align-items-center'>
                            <div className='form-field m-0'>
                                <input type='number' className='' id='sales' name='sales' value='' onChange={''} placeholder='Sales*' aria-label='sales input field' required />
                                <div className='currency'>
                                    {''}
                                </div>
                                <div className='symbol mt-1'>$</div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {/* <div className='col-4 col-md-4 my-0 p-0 d-flex justify-content-end align-items-end'>
                            <label className='form-label me-1' for='commission'>Commission:</label> 
                        </div> */}
                        <div className='col-12 px-0 d-flex justify-content-center align-items-center'>
                            <div className='form-field m-0'>
                                <input type='number' className='' id='commission' name='commission' value='' onChange={''} placeholder='Commission*' aria-label='commission input field' required />
                                <div className='currency'>
                                    {''}
                                </div>
                                <div className='symbol mt-1'>%</div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        {/* <div className='col-4 col-md-4 my-0 p-0 d-flex justify-content-end align-items-end'>
                            <label className='form-label me-1' for='commission'>Base Pay:</label> 
                        </div> */}
                        <div className='col-12 px-0 d-flex justify-content-center align-items-center'>
                            <div className='form-field m-0'>
                                <input type='number' className='' id='base-pay' name='base-pay' value='' onChange={''} placeholder='Base Pay' aria-label='base pay input field' required />
                                <div className='currency'>
                                    {''}
                                </div>
                                <div className='symbol mt-1'>$</div>
                            </div>
                        </div>
                    </div>
                    <button className={!isFormValid ? 'calculate-button inactive' :'calculate-button'} type='button' disabled={!isFormValid} onClick={handleSlidedown}>Calculate</button>
                </form>
            </div>
        </>
    );
}

export default CommissionComponent;
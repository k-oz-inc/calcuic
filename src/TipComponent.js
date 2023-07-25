import React, { useEffect, useState } from 'react';
import closeButton from './images/oval-close-button.svg';
import './Global.css';
import './TipComponent.css';

function TipComponent({ showButtons }) {
    //Form Field
    const [bill, setBill] = useState('');
    const [tip, setTip] = useState('');
    const [split, setSplit] = useState('');
    //Common Tip Percentages
    const [percent18, setPercent18] = useState(0.00);
    const [percent20, setPercent20] = useState(0.00);
    const [percent22, setPercent22] = useState(0.00);
    const [percent25, setPercent25] = useState(0.00);
    const [currentPercentage, setCurrentPercentage] = useState(0);
    //Form validation & results card slide-down
    const [isFormValid, setIsFormValid] = useState(false);
    const [slidedown, setSlidedown] = useState(false);

    const formatCurrency = (amount) => {
        return parseFloat(amount).toLocaleString(undefined, {
          style: 'currency',
          currency: 'USD',
        });
    };

    // const calculateTip = () => {
    //     const bill = parseFloat(document.getElementById('bill').value);
    //     const tip = parseFloat(document.getElementById('tip').value);
    //     const split = parseInt(document.getElementById('split').value);

    //     const tipAmount = (bill / 100 * tip).toFixed(2);
    //     const total = bill + parseFloat(tipAmount);
    // };

    const handleInputChange = (e) => {
        const inputChange = e.target.value;
        //Handle the Bill Field input in Real-time
        setBill(inputChange);
        //If the Bill Field is empty set the Tip Field to empty
        if (inputChange === '') {
            setTip('')
        }
        //Calculate the Common Percentages amounts based on the Bill amount
        setPercent18(inputChange === '' ? 0.00 : 18 / 100 * parseFloat(inputChange));
        setPercent20(inputChange === '' ? 0.00 : 20 / 100 * parseFloat(inputChange));
        setPercent22(inputChange === '' ? 0.00 : 22 / 100 * parseFloat(inputChange));
        setPercent25(inputChange === '' ? 0.00 : 25 / 100 * parseFloat(inputChange));
    };

    //Handle Common Tip Buttons Click
    const handleCommonTipPercentages = (e) => {
        const buttonValue = e.target.value;

        if (buttonValue === '18') {
            setTip(percent18)
        } else if (buttonValue === '20') {
            setTip(percent20)
        } else if (buttonValue === '22') { 
            setTip(percent22)
        } else if (buttonValue === '25') { 
            setTip(percent25)
        }; 
    };

    useEffect(() => {
        //Calculate current Tip percentage based on the Bill & Tip field inputs
        const percentage = (parseFloat(tip) / parseFloat(bill)) * 100;
        const truncPercentage = Math.floor(percentage * 10) / 10; //truncate the number after the decimal when a zero
        const percentageString = truncPercentage.toString();
        const decimalIndex = percentageString.indexOf('.');

        if (bill !== '' && tip !== '') {
            if (percentageString[decimalIndex + 1] === '9') {
                setCurrentPercentage((truncPercentage + 0.1).toLocaleString())
            } else {
                setCurrentPercentage(truncPercentage.toLocaleString());
                // setIsFormValid(true);
            }
        };
    }, [bill, tip, isFormValid]);

    useEffect(() => {
        //check that the Bill & Tip form fields are not empty to activate the Calculate button
        setIsFormValid(bill !== '' && tip !== '');
    }, [bill, tip]);

    const handleClick = () => {
        const newState = 'ButtonsComponent'; 
        showButtons(newState);
    };

    const handleSlidedown = () => {
        setSlidedown(true);
    };

    const total = formatCurrency(parseFloat(bill) + parseFloat(tip));
    const perPerson = formatCurrency((parseFloat(bill) + parseFloat(tip)) / parseInt(split));

    return(
        <>
            <div className=''>
                <div className='card mt-4'>
                    <div className='card-header mt-2'>
                        <h6 ><strong>Tip Calculator</strong></h6>
                        <img className='p-0 m-0 close-button' 
                        src={closeButton} alt='close-button'  
                        onClick={handleClick} aria-label='Close alert' 
                        type='button' data-close />
                    </div>
                    <div className='container mb-0'>
                        <div className='row mt-3 d-flex justify-content-evenly'>
                            <div className='col-12'>
                                <p className='mb-2'><b>Common Tip Percentages</b></p>
                            </div>
                            <div className='col-2 col-md-3 p-0 d-flex justify-content-center'>
                                <button id='percent-18' className='suggested-percentage' value='18' onClick={handleCommonTipPercentages}>
                                    18%
                                </button>
                            </div>
                            <div className='col-2 col-md-3 p-0 d-flex justify-content-center'>
                                <button id='percent-20' className='suggested-percentage' value='20' onClick={handleCommonTipPercentages}>
                                    20%
                                </button>
                            </div>
                            <div className='col-2 col-md-3 p-0 d-flex justify-content-center'>
                                <button id='percent-22' className='suggested-percentage' value='22' onClick={handleCommonTipPercentages}>
                                    22%
                                </button>
                            </div>
                            <div className='col-2 col-md-3 p-0 d-flex justify-content-center'>
                                <button id='percent-25' className='suggested-percentage' value='25' onClick={handleCommonTipPercentages}>
                                    25%
                                </button>
                            </div>
                        </div>
                        <div className='row mb-0 d-flex justify-content-evenly'>
                            <div className='col-2 col-md-3 mb-0 p-0 d-flex justify-content-center'>
                                <p id='amount-18'>{formatCurrency(percent18)}</p>
                            </div>
                            <div className='col-2 col-md-3 mb-0 p-0 d-flex justify-content-center'>
                                <p id='amount-20'>{formatCurrency(percent20)}</p>
                            </div>
                            <div className='col-2 col-md-3 mb-0 p-0 d-flex justify-content-center'>
                                <p id='amount-22'>{formatCurrency(percent22)}</p>
                            </div>
                            <div className='col-2 col-md-3 mb-0 p-0 d-flex justify-content-center'>
                                <p id='amount-25'>{formatCurrency(percent25)}</p>
                            </div>
                        </div>
                    </div>
                    <p className='my-0 common-tip-prompt'><small>Please select one option or enter a customized tip amount.</small></p>
                    <div className='ruler-line' />
                    <form className='mt-0'>
                        <div className='container pt-3'>
                            <div className='row'>
                                {/* <div className='col-4 col-md-3 my-0 p-0 d-flex justify-content-end align-items-end'>
                                    <label className='form-label me-1' for='bill'>Bill:</label> 
                                </div> */}
                                <div className='col-12 mt-2 px-0 d-flex justify-content-center align-items-center'>
                                    <div className='form-field m-0'>
                                        <input type='number' className={bill === '' ? 'caret- my-0' : 'caret-transparent my-0'} id='bill' name='bill' value={bill} onChange={handleInputChange} placeholder='Bill*'  aria-label='bill amount input field' required />
                                        <div className='currency'>
                                            {bill === '' ? '' : formatCurrency(bill)}
                                        </div>
                                        <div className='symbol'>$</div>
                                    </div>
                                </div>
                                {/* <div className='col-4 col-md-3 my-0 p-0 d-flex justify-content-end align-items-end'>
                                    <label className='form-label me-1' for='tip'>Tip:</label>
                                </div> */}
                                <div className='col-12 my-2 px-0 d-flex justify-content-center align-items-center'>
                                    <div className='form-field m-0'>
                                        <input type='number' className={tip === '' ? 'caret- my-0' : 'caret-transparent my-0'} id='tip' name='tip' value={tip} onChange={(e) => setTip(e.target.value)} placeholder='Tip*' aria-label='tip amount input field' required />
                                        <div className='currency'>
                                            {tip === '' ? '' : formatCurrency(tip)}
                                        </div>
                                        <div className='symbol'>
                                            {bill !== '' && tip !== '' ? `${currentPercentage}%` : '$'}
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='col-4 col-md-3 my-0 p-0 d-flex justify-content-end align-items-end'>
                                    <label className='form-label me-1' for='split'>Split:</label>
                                </div> */}
                                <div className='col-12 mb-2 px-0 d-flex justify-content-center align-items-center'>
                                    <div className='form-field m-0'>
                                        <input type='number' className='split-field my-0' id='split' name='split' value={split} onChange={(e) => setSplit(e.target.value)} placeholder='Split' aria-label='split bill by input field' />
                                        <div className='symbol'>
                                            {/* Nested Ternary operators to deternime the proper symbol/label in the field */}
                                            {split === '' || split === '0' ? '#' : `${split > 1 ? 'people' : 'person'}`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={!isFormValid ? 'calculate-button inactive mb-3' :'calculate-button mb-3'} type='button' disabled={!isFormValid} onClick={handleSlidedown}>Calculate</button>
                    </form>
                </div>
                <div className={slidedown ? 'mt-3 py-2 tip-results-card active' : 'mt-3 py-2 tip-results-card'}>
                <h6 className='mb-2 results-card-header'><strong>⟣⬩⬩⬩Results⬩⬩⬩⟢</strong></h6>
                <div className='ruler-line'/>
                    <div className='w-100 pt-2 your-BMI-BG px-3'>
                        <p className='m-0'><strong>Bill Amount: </strong><strong className='tip-results'>{bill !== '' ? formatCurrency(bill) : '$0.00'}</strong></p>
                        <div className='ruler-line'/>
                        <p className='m-0'><strong>Tip Amount: </strong><strong className='tip-results'>{tip === '' ?  '$0.00' : formatCurrency(tip)}</strong> <br />{tip === '' ?  '' : currentPercentage}%</p>
                        <div className='ruler-line'/>
                        <p className='mt-1 mb-0'><strong>Total Amount: </strong><strong className='tip-results'>{tip !== '' ? total : '$0.00'}</strong></p>
                        <div className='ruler-line'/>
                        <p className='m-0'><strong>Split Amount: </strong><strong className='tip-results'>{bill === '' || tip === '' ? '$0.00' : `${split === '' ? total : perPerson}`}</strong> <br />per person</p>
                        <div className='ruler-line'/>
                        <p className='m-0'>ENJOY!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TipComponent;
import React, { useState, useEffect } from 'react';
import closeButton from './images/oval-close-button.svg';
import './Global.css';
import './BMIComponent.css';

function BMIComponent({ showButtons }) {
    const [weight, setWeight] = useState('');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');

    const [bmi, setBMI] = useState('');
    const [status, setStatus] = useState('');
    let [statusAlert, setStatusAlert] = useState('your-status-green');

    //Validate form completion or set calculate button inactive when false
    const [isFormValid, setIsFormValid] = useState(false);
    const [slidedown, setSlidedown] = useState(false);

    const calculateBMI = () => {
        const weight = parseFloat(document.getElementById("weight").value);
        const feet = parseFloat(document.getElementById("feet").value);
        const inches = parseFloat(document.getElementById("inches").value);

        const totalHeight = feet * 12 + inches;
        const bmi = (weight / (totalHeight * totalHeight)) * 703;
        const truncBMI = Math.floor(bmi * 10) / 10; //Truncate BMI variable one digit after the decimal
        let status = '';

        if (truncBMI < 18.5) { //Underweight results
            status = 'Underweight';
            setStatusAlert('your-status-orange');
        } else if (truncBMI >= 18.5 && truncBMI <= 24.9) { //Healthy Weight results
            status = 'Healthy Weight';
            setStatusAlert('your-status-green');
        } else if (truncBMI >= 25.0 && truncBMI <= 29.9) { //Overweight results
            status = 'Overweight';
            setStatusAlert('your-status-orange');
        } else if (truncBMI >= 30.0) { //Obesity results
            status = 'Obesity';
            setStatusAlert('your-status-red');
        }

        setBMI(truncBMI);
        setStatus(status)
    };

    useEffect(() => {
        //check if any of the form fields are empty
        setIsFormValid(weight !== '' && feet !== '' && inches !== '');
    }, [weight, feet, inches]);

    //toggle between main buttons & components 
    const handleClick = () => {
        const newState = 'ButtonsComponent';
        showButtons(newState);
    };

    const handleSlidedown = () => {
        setSlidedown(true);
    };

    return (
        <>
            <div className='card mt-4'>
                <div className='card-header mt-2'>
                    <h6 ><strong>BMI Calculator</strong></h6>
                    <img className='p-0 m-0 close-button' src={closeButton} alt='close button'  onClick={handleClick} aria-label='Close alert' type='button' data-close />
                </div>
                <form className='mt-3'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 px-0 d-flex justify-content-center align-items-center'>
                                <div className='form-field m-0'>
                                    {/* <label className='form-label me-1' for='weight'>Weight:</label> */}
                                    <input className='weight-field ' type='number' id='weight' name='weight' value={weight} onChange={(e) => setWeight(e.target.value)} placeholder='Weight'  aria-label='weight in pounds input field' required />
                                    <div className='symbol mt-1'>lb.</div>
                                </div>
                            </div>
                            <div className='col-12 px-0 d-flex justify-content-center align-items-center '>
                                <div className='form-field m-0'>
                                    {/* <label className='form-label me-1' for='feet'>Height:</label> */}
                                    <input className='height-field me-2' type='number' id='feet' name='feet' value={feet} onChange={(e) => setFeet(e.target.value)} placeholder='Height' aria-label='height in feet input field' required />
                                    <div className='symbol-feet mt-1'>ft.</div>
                                    <input className='height-field' type='number' id='inches' name='inches' value={inches} onChange={(e) => setInches(e.target.value)} placeholder='Height'  aria-label='height in inches input field' required />
                                    <div className='symbol mt-1'>in.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button id='BMI-button' 
                        className={!isFormValid ? 'my-3 calculate-button inactive' : 'my-3 calculate-button'} 
                        type='button' disabled={!isFormValid} onClick={() => {calculateBMI(); handleSlidedown();}}>
                        Calculate
                    </button>
                </form>
            </div>
            <div className={slidedown ? 'mt-3 py-2 your-BMI active' : 'mt-3 py-2 your-BMI'}>
                <h6 className='results-card-header'><strong>⟣⬩⬩⬩Results⬩⬩⬩⟢</strong></h6>
                <div className='ruler-line'/>
                <div className='w-100 your-BMI-BG px-3'>
                    <p className='m-0'><strong>Your BMI is:</strong> <strong className={statusAlert}>{bmi}</strong></p>
                    <div className='ruler-line'/>
                    <p className='m-0'><strong>Weight Status:</strong> <strong className={statusAlert}>{status}</strong></p>
                    <div className='ruler-line'/>
                    <p className='text-start mt-1 mb-0'>A healthy BMI falls within the range of 18.5 and 24.9</p>
                    <div className='ruler-line'/>
                    <p className='text-start m-0'>Maintaining a healthy weight is essential, as it significantly reduces the risk of developing health issues.</p>
                    <div className='ruler-line'/>
                    <p className='text-start m-0'>Always consult a physician about your health status.</p>
                </div>
            </div>
        </>
    );
}

export default BMIComponent;
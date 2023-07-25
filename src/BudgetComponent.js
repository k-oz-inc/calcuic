import closeButton from './images/oval-close-button.svg';
import './Global.css';
import './BudgetComponent.css';

function BudgetComponent({ showButtons }) {
    //To toggle between components Include the { showButtons } props and handleClick function on every componet 
    const handleClick = () => {
        const newState = 'ButtonsComponent'; // or any value you want to set
        showButtons(newState);
    };

    return (
        <>
            <div className='card mt-5'>
                <div className='card-header mt-2'>
                    <h6 ><strong>Daily Budget Calculator</strong></h6>
                        <img className='close-button p-0 m-0' src={closeButton} alt='close-button'  onClick={handleClick} aria-label='Close alert' type='button' data-close />
                </div>
            </div>
        </>
    );
}

export default BudgetComponent;
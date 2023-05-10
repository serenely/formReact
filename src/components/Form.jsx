import { useState } from "react";

const Form = () => {
    //name form
    const [addedName, setAdedName] = useState('')
    const [nameIsTouched, setNameIsTouched] = useState(false)
    const enteredNameInvalid = addedName.trim() === '' && nameIsTouched;
    const enteredNameValid = addedName.trim() === '';

        const nameChangeHandler = e => {
        setAdedName(e.target.value)
        setNameIsTouched(true)
    }

    // email form
    const [addedEmail, setAddedEmail] = useState('')
    const [emailIsTouched, setEmailIsTouched]= useState(false)
    const enteredEmailInvalid = !addedEmail.includes('@') && emailIsTouched;
    const enteredEmailValid = !addedEmail.includes('@')

    const emailChangeHandler = e => {
        setAddedEmail(e.target.value)
        setEmailIsTouched(true)
    }

    // phone form
    const [addedNumber, setAddedNumber] = useState('')
    const [numberIsTouched, setNumberIsTouched] = useState(false)
    const numberIsInvalid = addedNumber.length < 12 && numberIsTouched
    const enteredNumberValid = addedNumber.length < 12

    const numberChangeHandler = e => {
        if (addedNumber.length < 12) {
            setAddedNumber(e.target.value)
        }
        setNumberIsTouched(true)
    }

    const formSubmitHandle = e => {
        e.preventDefault()
        
        if (enteredNameValid && enteredEmailValid && enteredNumberValid) {
            return;
        }
        console.log(addedName);
        console.log(addedEmail);
        console.log(addedNumber);

        setNameIsTouched(false)
        setAdedName('')
        setEmailIsTouched(true)
        setAddedEmail('')
        setNumberIsTouched(false)
        setAddedNumber('')
    }

    return (
        <form onSubmit={formSubmitHandle}>
            <div className={enteredNameInvalid && nameIsTouched ? 'input__form invalid' : 'input__form'}>
                <label htmlFor="name">Name</label>
                <input
                    required
                    type="text"
                    id="name"
                    value={addedName}
                    placeholder="Enter name"
                    onChange={nameChangeHandler}
                />
                <br />
                {enteredNameInvalid && <small> Enter the name please</small>}
            </div>
            <div className={enteredEmailInvalid && emailIsTouched ? 'input__form invalid' : 'input__form' }>
                <label htmlFor="email">Email</label>
                <input
                    required
                    type="text"
                    id="email"
                    placeholder="Enter email"
                    onChange={ emailChangeHandler}
                    value={addedEmail}
                />
            </div>
            {enteredEmailInvalid && emailIsTouched && <small>Enter the email syntax(@) please</small>}
        <div className={numberIsInvalid && numberIsTouched ? 'input__form invalid' : 'input__form'}>
            <label htmlFor="phone">Phone</label>
            <input
                required
                type="number"
                    id="number"
                    placeholder="Enter your phone number"
                value={addedNumber}
                onChange={numberChangeHandler}
            />
            <br />
            {numberIsInvalid && numberIsTouched && <small> Enter all of 12 numbers</small>}
        </div>
            <div>
                <button>Submit</button>
            </div>
            
        </form>
    )
}

export default Form;
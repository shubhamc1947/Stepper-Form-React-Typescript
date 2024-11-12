
import { FormEvent, useState } from 'react'
import useStepperFrom from './useStepperFrom'
import './app.css';
import UserDetails from './UserDetails';
import AddressDetails from './AddressDetails';
import LoginDetails from './LoginDetails';

type TUserData = {
  firstname: string;
  lastname: string;
  age: string;
  street: string;
  pincode: string;
  state: string;
  email: string;
  password: string;
}
const INITIAL_DATA: TUserData = {
  firstname: "",
  lastname: "",
  age: "",
  street: "",
  pincode: "",
  state: "",
  email: "",
  password: "",
}
const App = () => {
  const [userData, setUserData] = useState<TUserData>(INITIAL_DATA);

  const modifyUserData = (fields: Partial<TUserData>) => {
    setUserData(curr => {
      return (
        { ...curr, ...fields }
      )
    });
  }

  const { step, steps, next, prev, currIdx, isFristPage, isLastPage } = useStepperFrom([<UserDetails {...userData} modifyUserData={modifyUserData} />, <AddressDetails {...userData} modifyUserData={modifyUserData} />, <LoginDetails {...userData} modifyUserData={modifyUserData} />]);
  // console.log(userData)

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastPage) {
      next();
    } else {
      alert("Form Submitted  " + JSON.stringify(userData));
    }
  }
  return (
    <div className='wrapper' >
      <form onSubmit={submitForm}>
        <div className='idx'>
          {currIdx + 1}/{steps.length}
        </div>
        <div className='cont'>{step}</div>
        <div className="btngroup">
          {!isFristPage && (<button type='button' onClick={prev}>back</button>)}
          <button type='submit'>{isLastPage ? "Submit" : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App
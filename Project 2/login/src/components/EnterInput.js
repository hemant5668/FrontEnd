import React,{useState} from 'react'
import Button from './Button'
import './EnterInput.css'
import Error from './Error'

export default function EnterInput(props) {
    const [username, setusername] = useState('')
    const [age, setage] = useState('')
    const [error, seterror] = useState()

    const namechangeHandler=(event)=>{
        setusername(event.target.value)
    }
    const agechangeHandler=(event)=>{
        setage(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault();

        if(username.trim().length===0 || age.trim().length===0){
            seterror({
                title:'Invalid Input',
                message:'pls enter age and name'
            })
            return;
        }
        if(+age<1){
            seterror({
                title:"Ivalid age",
                message:"pls enter right age" 
            })
            return;
        }
        const finalform={
            key:Math.random(),
            name:username,
            age:age,
        }

        props.onadduser(finalform);
        setage('');
        setusername('');
    }
    const onclickhandler=()=>{
        seterror(null);
    }


  return (
    <>
    {error ?<Error click={onclickhandler} title={error.title} message={error.message}/>: 
    <form className='input' onSubmit={submitHandler}>
        <div className=''>
            <label>Username</label>
            <input type="text" value={username} onChange={namechangeHandler}  />
        </div>
        <div className=''>
            <label>Age( Years)</label>
            <input type="number" value={age} onChange={agechangeHandler}/>
        </div>
        <Button/>
    </form>}
    </>
  )
}

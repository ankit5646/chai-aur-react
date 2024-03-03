import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
 const [length, setLength] = useState(8);
 const [number,setNumber] = useState(false);
 const [char,setChar] = useState(false);
 const [password,setPassword] = useState("");


 // useRef 

 const passwordRef = useRef(null)

//  useCallback(fn,dependency);

const passwordGenerator = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if(number==true){
    str=str+"1234567890"
  }
  if(char==true){
    str=str+"!@#$%^&*()_+}{:|?></.,';][=-"
  }

    for(let i = 1; i<length;i++){
      let character = Math.floor(Math.random()*str.length+1);
     
      pass = pass+str.charAt(character);
    }

    setPassword(pass);

},[length,number,char]);

const copyToClipbord = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,99)
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordGenerator();
},[length,number,char,passwordGenerator])


 
  return (
    <>
        <div className='w-full max-w-md shadow-md mx-auto rounded-lg px-4 py-3 my-8 text-orange-500 bg-slate-600'>
          <h1 className='text-center text-white my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='**Password**'
            readOnly
            ref={passwordRef}
            />
            <button onClick={copyToClipbord} className='outline-none text-white bg-blue-500 px-3 py-0.5 shrink-0'>copy</button>
          </div>

          <div className=' flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range" 
              min={8}
              max={99}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
              />
              Length:{length}
            </div>

            <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={number}
              id='numberInput'
              onChange={()=>{
                setNumber((pre)=>!pre);
              }} />
              <label htmlFor="numberInput">Numbers</label>
              
            </div>

            <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={number}
              id='charInput'
              onChange={()=>{
                setNumber((pre)=>!pre);
              }} />
              <label htmlFor="charInput">Character</label>
              
            </div>

          </div>

          
        </div>
    </>
  )
}

export default App

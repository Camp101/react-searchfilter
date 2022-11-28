import React, { useState } from 'react';
import './App.css';
import JSONDATA from './MOCK_DATA.json';

const App = () => {

    const [search, setSearch] = useState('');
    
    return(
        <>
        
        <input 
            type='text' 
            placeholder='Search'
            onChange={(e)=> {setSearch(e.target.value)}}
        />
        <div className='container'>
        {JSONDATA.filter((val)=> {
            if (search === ""){
                return val
            } else if (val.first_name.toLowerCase().includes(search.toLowerCase())){
                return val
            }
        }).map((val, key) => {
            return  <div className='user' key={key}>
                    <p>{val.first_name}</p>
                    </div>
        })}
        </div>
        </>
    )
}

export default App;
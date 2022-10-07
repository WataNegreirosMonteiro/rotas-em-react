import React from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {FiSearch} from 'react-icons/fi';

import Signin from '../signin';
import Signup from '../signup';

export default function Home(){
  return (
    <div className='home-container'>
      <div className='home-card'>
        <div className='home-search-bar'>
          <input 
            type='text' 
            maxlength='8'
            placeholder='Insira o CEP...' 
            // value={cep} 
            // onChange={(e)=> setCep(e.target.value)}
          />
        <button className='home-search-but'><FiSearch /></button>
      </div>
    </div>
     
      
    </div>
  );
}
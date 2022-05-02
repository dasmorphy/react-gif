import React, {useState}from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  
    const [inputValue, setInputValue] = useState('')

    const ChangeInput = (e) =>{
        setInputValue(e.target.value)
        
    }
    
    const FormSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(categories =>[inputValue,...categories])
            setInputValue('')
        }
    }

    return (
    <form onSubmit ={FormSubmit}>  
        <h1>{inputValue}</h1>  
        <input
            type="text"
            value= {inputValue}
            onChange = {ChangeInput}
        />
    </form>
  )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
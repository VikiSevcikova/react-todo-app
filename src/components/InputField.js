import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

const InputField = ({id, type, label, placeholder, value, handleChange, inputProps, multiline = {isMultiline:false}}) => {
    const [error, setError] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const validateField = () => {
        setIsClicked(true);
        if(value === ''){
            setError(`${label} is required`);
        }else if(id === 'email' && !(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value))){
            console.log('invalid')
            setError(`${label} is invalid`);
        }else{
            setError('');
        }
    }

    useEffect(()=>{
        if(isClicked) validateField();
    },[value])

    return(
        <TextField
            color="secondary"
            style={{paddingBottom: 10}}
            fullWidth
            id={id}
            type={type}
            required
            value={value}
            onFocus={()=>setIsClicked(true)}
            onChange={handleChange(id)}
            onBlur={validateField}
            margin="dense"
            InputProps={inputProps}
            error={!!error}
            helperText={error}
            label={label}
            placeholder={placeholder}
            multiline={multiline.isMultiline}
            rows={multiline.rows}
        />
    );
}

export default InputField;
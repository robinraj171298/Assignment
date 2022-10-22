import { TextField } from '@mui/material';
import './CustomTextField.css';

export const CustomTextField = (props) => {
    return (
        <>
            <div class="inputLabel">
                <label>{props.label}</label>
            </div>
            <TextField
              class="customTextField"
              InputProps={{ sx: { width: '100%' } }}
              id={props.id}
              //label={props.label}
              placeholder={props.placeholder}
              value={props.workspaceName}
              onChange={(e) => props.onChange(e.target.value)}
              minLength={props.minLength}
              maxLength={props.maxLength}
            />
    </>
  )
}


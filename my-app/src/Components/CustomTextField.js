import { TextField } from '@mui/material';
import './CustomTextField.css';

export const CustomTextField = (props) => {
    return (
    <>
            <TextField
              id={props.id}
              label={props.label}
              placeholder={props.placeholder}
              value={props.workspaceName}
              onChange={props.onChange()}
              minLength={props.minLength}
              maxLength={props.maxLength}
            />
    </>
  )
}


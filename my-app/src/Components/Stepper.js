import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './Stepper.css'

const steps = [1,2,3,4];

export const HorizontalLinearStepper = props => {
  return (<Stepper activeStep={props.currentTab - 1} style={ {width : '500px'}}>
   {steps.map((label, index) => {
          
          return (
            <Step key={label}>
              <StepLabel class="step" StepIconProps={{ sx: { height: '1.5em', width: '1.5em' } }}></StepLabel>
            </Step>
          );
        })}
 </Stepper>)
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [1,2,3,4];

export const HorizontalLinearStepper = () => {
  return (<Stepper activeStep={2} style={ {width : '500px'}}>
   {steps.map((label, index) => {
          
          return (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          );
        })}
 </Stepper>)
}

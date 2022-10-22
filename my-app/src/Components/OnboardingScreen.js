import { CustomTextField } from './CustomTextField';
import Paper from '@mui/material/Paper';
import { AppLogo } from './AppLogo';
import {HorizontalLinearStepper} from './Stepper'
import './OnboardingScreen.css';
import { Grid } from '@mui/material';
import { OnboardingForm } from './OnboardingForm';

export const OnboardingSceen = () => {
    return (
        <Paper elevation={2} class="mainContainer">
            <Grid container flexDirection="column" justifyContent="center"
                  alignItems="center" rowSpacing={8}>
                <Grid item>
                    <AppLogo />
                </Grid>
                <Grid item>
                    <HorizontalLinearStepper />
                </Grid>
                {/* <Grid item>
                    <CustomTextField></CustomTextField>
                </Grid>
                <Grid item>
                    <CustomTextField></CustomTextField>
                </Grid> */}
                <Grid item>
                    <OnboardingForm />
                </Grid>
            </Grid>
      </Paper>
  )
}


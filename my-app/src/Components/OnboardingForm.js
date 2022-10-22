
import React, { useState } from 'react';
import { CustomButton } from './CustomButton'
import { Card } from './Card';
import './OnboardingForm.css';
import check from '../Assets/Images/check.PNG';
import { CustomTextField } from './CustomTextField';


export const OnboardingForm = props => {
  /** Headings for each Tab */
  const tabHeadings = [
    {
      tab: 1,
      main: "Welcome! First things First...",
      sub: "You can always change them later."
    },
    {
      tab: 2,
      main: "Let's set up a home for all your work",
      sub: "You can always create another workspace later."
    },
    {
      tab: 3,
      main: "How are you planning to use Eden?",
      sub: "We'll streamline your setup experience accordingly."
    },
    {
      tab: 4,
      // main: "",
      // sub: ""
    }
  ];
  /** Usage card content  */
  const usageCards = [
    {
      id: 1,
      title: 'For myself',
      text: 'Write better. Think more clearly. Stay organized.'
    },
    {
      id: 2,
      title: 'With my team',
      text: 'Wikis, docs, tasks & projects, all in one place.'
    }
  ];

  const [tabNumber, setTabNumber] = useState(1);

  /** form state for individual tabs */
  const [user, setUser] = useState({
    fullName: '',
    displayName: '',
  });
  const [workSpace, setWorkSpace] = useState({
    workspaceName: '',
    workspaceURL: '',
  });
  const [usage, setUsage] = useState({
    usage: ''
  });

  /** formState for entire flow */
  const [formState, setFormState] = useState({
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceURL: '',
    usage: '',
  });

  /** onClick of Button in each tab */
    const handleClick = () => {
    setFormState({...user,...workSpace,...usage});
        if (tabNumber !== 4) {
            props.handleTabChange(tabNumber + 1);
            setTabNumber((tab) => tab + 1);
        };
  }

    /** Form submit */
// const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (tabNumber === 4) return;
//     setTabNumber((tab) => tab + 1);
//   }


    return (
    <div class="Onboarding">
      { tabHeadings[tabNumber-1].main &&
        <div class="tabHeader">
          <span class="tabHeader__main">{tabHeadings[tabNumber-1].main}</span>
          <span class="tabHeader__sub">{tabHeadings[tabNumber-1].sub}</span>
        </div>
      }

      <div class="form_section">
        { tabNumber === 1 &&
                    <>
        <div class="inputField">
            <CustomTextField 
              id="fullName"
              label="Full Name"
              placeholder='Steve Jobs'
              value={user.fullName}
                            onChange={(value) => { debugger; setUser({ ...user, 'fullName': value }) }}
              minLength="2"
              maxLength="25"
                        />
        </div>
        <div class="inputField">
            <CustomTextField
              id="displayName"
              label="Display Name"
              placeholder='Steve'
              value={user.displayName}
              onChange={(value) => setUser({...user,'displayName': value})}
              minLength="2"
              maxLength="12"
            />
                    </div>
                            <CustomButton text="Create Workspace" handleClick={handleClick} /> 

         </>  
        }

        { tabNumber === 2 &&
                    <>
        <div class="inputField">
           <CustomTextField
              id="workspaceName"
              label="Workspace Name"
              placeholder='Eden'
              value={workSpace.workspaceName}
              onChange={(value) => setWorkSpace({ ...workSpace, 'workspaceName': value })}
              minLength="2"
              maxLength="25"
            />
        </div>
        <div class="inputField">
           <CustomTextField
              id="workspaceURL"
              label="Workspace URL"
              placeholder='Example'
              value={workSpace.workspaceURL}
              onChange={(value) => setWorkSpace({ ...workSpace, 'workspaceURL': value })}
              minLength="2"
              maxLength="20"
            />
        </div>
        
            
            <CustomButton text="Create Workspace" handleClick={handleClick} />
         </>
        }

        { tabNumber === 3 &&
          <div class="tabThree">
            <div class="cardsContainer">
              {usageCards.map((card) => {
                return <Card key={card.id} isActive={card.id === usage.usage} card={card} setUsage={setUsage} /> //handleCardSelect={handleCardSelect}
              })}
            </div>
            <CustomButton text="Create Workspace" handleClick={handleClick} />
          </div>
        }
        
        { tabNumber === 4 &&
          <div class="tabFour">
            <div class="tabFour__img">
              <img src={check} alt="check" />
            </div>
            <span style={{ fontSize: '2rem', marginBottom: '1rem', 
                  fontWeight: '600', color: 'var(--color-primary-text-dark)'}}>
                  Congratulations, {formState.displayName}!
            </span>
            <span style={{ fontSize: '.9rem', marginBottom:'2rem', 
                  color: 'var(--color-primary-text-medium)' }}>
                  You have completed onboarding, you can start using the Eden!
            </span>
            <CustomButton text="Launch Eden" handleClick={handleClick} />
          </div>
        }
      </div>

    </div>
  )
}

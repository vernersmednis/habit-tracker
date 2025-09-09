import { useState } from 'react'
import { Provider } from '@/components/ui/provider'
import HabitList from './components/ui/custom/habitlist'
import HabitTracker from './components/ui/custom/habittracker'

import {
  AppWrapper,
  HabitList as HabitListStyled,
  HabitTracker as HabitTrackerStyled,
} from './styles.js'

function App() {
  const [habits, setHabits] = useState([
    'Drink Water',
    'Exercise',
    'Read',
  ]);

  return (
    <>
      <Provider>
        <AppWrapper>
          <HabitList habits={habits} setHabits={setHabits} />
          <HabitTracker habits={habits} />
        </AppWrapper>
      </Provider>
    </>
  );
}

export default App

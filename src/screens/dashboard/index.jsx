import { useRef, useState, useEffect } from 'react'
import { useMediaQuery } from '@chakra-ui/react';
import HabitList from '@/components/ui/custom/habit-list'
import HabitTracker from '@/components/ui/custom/habit-tracker'
import { Tabs } from "@chakra-ui/react";


import {
  DashboardContentStyled,
  HabitListStyled,
  HabitTrackerStyled
} from './styles.js'

function Dashboard() {
  const [habits, setHabits] = useState([
    'Drink Water',
    'Exercise',
    'Read',
  ]);


  // Use Chakra UI's useMediaQuery for responsive design
  const [isMobile] = useMediaQuery('(max-width: 900px)');
  const [activeTab, setActiveTab] = useState(isMobile ? 'habit-list' : 'desktop-view');
  
  useEffect(() => {
    setActiveTab(isMobile ? 'habit-list' : 'desktop-view');
  }, [isMobile]);

  
  return (
    <Tabs.Root display="flex" flexDirection="column" height="100vh" variant="enclosed" colorScheme="blue" value={activeTab} onValueChange={(e) => setActiveTab(e.value)}>
      {isMobile ? (
        <Tabs.List display="flex" alignItems="center" height="auto" width="100%" whiteSpace="nowrap" borderBottom="1px solid #eee">
          <Tabs.Trigger value="habit-list" width="100%">Habits</Tabs.Trigger>
          <Tabs.Trigger value="habit-tracker" width="100%">Tracker</Tabs.Trigger>
        </Tabs.List>
      ) : null}
      <Tabs.Content value="habit-list" height="100%">
        <HabitListStyled>
          <HabitList habits={habits} setHabits={setHabits} />
        </HabitListStyled>
      </Tabs.Content>
      <Tabs.Content value="habit-tracker" height="100%">
        <HabitTrackerStyled>
          <HabitTracker habits={habits} />
        </HabitTrackerStyled>
      </Tabs.Content>
      <Tabs.Content value="desktop-view" height="100%">
        <DashboardContentStyled>
          <HabitList habits={habits} setHabits={setHabits} />
          <HabitTracker habits={habits} />
        </DashboardContentStyled>
      </Tabs.Content>
    </Tabs.Root>
  );
}

export default Dashboard

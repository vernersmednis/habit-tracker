import { useRef, useState } from 'react'
import HabitList from '@/components/ui/custom/habit-list'
import HabitTracker from '@/components/ui/custom/habit-tracker'
import { Tabs } from "@chakra-ui/react";


import {
  DashboardContent,
  DashboardWrapper,
  HabitList as HabitListStyled,
  HabitTracker as HabitTrackerStyled
} from './styles.js'
import { useEffect } from 'react';


function Dashboard() {
  const [habits, setHabits] = useState([
    'Drink Water',
    'Exercise',
    'Read',
  ]);

  const [activeTab, setActiveTab] = useState('desktop-view');

  // Responsive Design (Switch from Desktop to Mobile View and vice versa)
  useEffect(() => {
    const handleResize = () => {
      if (document.documentElement.scrollWidth > window.innerWidth) {
        setActiveTab('tab-1');
      }
      else { 
        setActiveTab('desktop-view');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Call on mount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Tabs.Root height="100vh" variant="enclosed" colorScheme="blue" value={activeTab} onValueChange={(e) => setActiveTab(e.value)}>
      {activeTab !== 'desktop-view' && (
        <Tabs.List display="flex" alignItems="center" height="50px" width="100%" whiteSpace="nowrap" borderBottom="1px solid #eee">
          <Tabs.Trigger value="tab-1" width="100%">Habits</Tabs.Trigger>
          <Tabs.Trigger value="tab-2" width="100%">Tracker</Tabs.Trigger>
          <Tabs.Trigger value="desktop-view" width="100%" display="none">Both</Tabs.Trigger>
        </Tabs.List>
      )}
      <Tabs.Content value="tab-1" height="calc(100% - 66px)">
        <HabitList habits={habits} setHabits={setHabits} />
      </Tabs.Content>
      <Tabs.Content value="tab-2" height="calc(100% - 66px)">
        <HabitTracker habits={habits} carousel={true} />
      </Tabs.Content>
      <Tabs.Content value="desktop-view" height="100%">
        <DashboardContent>
          <HabitList habits={habits} setHabits={setHabits} />
          <HabitTracker habits={habits} carousel={false} />
        </DashboardContent>
      </Tabs.Content>
    </Tabs.Root>
  );
}

export default Dashboard

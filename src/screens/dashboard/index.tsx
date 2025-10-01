import { useState, useEffect } from 'react'
import { useMediaQuery } from '@chakra-ui/react';
import HabitList from '@/components/ui/custom/habit-list'
import HabitTracker from '@/components/ui/custom/habit-tracker'
import { Tabs } from "@chakra-ui/react";
import { useFetchHabitWeekdays } from '@/hooks/habitWeekdays/useFetchHabitWeekdays';
import { useUpdateHabitWeekday } from '@/hooks/habitWeekdays/useUpdateHabitWeekday';
import { useFetchWeekdays } from '@/hooks/weekdays/fetchWeekdays';
import { useFetchHabits } from '@/hooks/habits/useFetchHabits';
import { useCreateHabit } from '@/hooks/habits/useCreateHabit';
import { useDeleteHabit } from '@/hooks/habits/useDeleteHabit';

import {
  DashboardContentStyled,
  HabitListStyled,
  HabitTrackerStyled
} from './styles'

function Dashboard() {

  // Fetch data from the database
  const { weekdays } = useFetchWeekdays();
  const { updateHabitWeekday } = useUpdateHabitWeekday();
  const { habitWeekdays, refetchHabitWeekdays } = useFetchHabitWeekdays();
  const { habits, refetchHabits } = useFetchHabits();
  const { createHabit } = useCreateHabit();
  const { deleteHabit } = useDeleteHabit();

  // Use Chakra UI's useMediaQuery for responsive design
  const [isMobile] = useMediaQuery(['(max-width: 900px)']);
  const [activeTab, setActiveTab] = useState(isMobile ? 'habit-list' : 'desktop-view');
  useEffect(() => {
    setActiveTab(isMobile ? 'habit-list' : 'desktop-view');
  }, [isMobile]);

  return (
    <Tabs.Root display="flex" flexDirection="column" variant="enclosed" colorScheme="blue" value={activeTab} onValueChange={(e) => setActiveTab(e.value)}>
      {isMobile ? (
        <Tabs.List display="flex" alignItems="center" whiteSpace="nowrap" borderBottom="1px solid #eee">
          <Tabs.Trigger value="habit-list" width="50%">Habits</Tabs.Trigger>
          <Tabs.Trigger value="habit-tracker" width="50%">Tracker</Tabs.Trigger>
        </Tabs.List>
      ) : null}
      <Tabs.Content value="habit-list">
        <HabitListStyled>
          <HabitList habits={habits} refetchHabits={refetchHabits} createHabit={createHabit} deleteHabit={deleteHabit} />
        </HabitListStyled>
      </Tabs.Content>
      <Tabs.Content value="habit-tracker">
        <HabitTrackerStyled>
          <HabitTracker habits={habits} weekdays={weekdays} updateHabitWeekday={updateHabitWeekday} habitWeekdays={habitWeekdays} refetchHabitWeekdays={refetchHabitWeekdays}/>
        </HabitTrackerStyled>
      </Tabs.Content>
      <Tabs.Content value="desktop-view">
        <DashboardContentStyled>
          <HabitList habits={habits} refetchHabits={refetchHabits} createHabit={createHabit} deleteHabit={deleteHabit} />
          <HabitTracker habits={habits} weekdays={weekdays} updateHabitWeekday={updateHabitWeekday} habitWeekdays={habitWeekdays} refetchHabitWeekdays={refetchHabitWeekdays}/>
        </DashboardContentStyled>
      </Tabs.Content>
    </Tabs.Root>
  );
}

export default Dashboard

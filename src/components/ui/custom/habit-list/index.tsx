import { Box, Heading, VStack, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import type { HabitListProps as HabitListProps } from './types';
import type { User } from "@/types/user";

const user: User = {
  email: "fake@email.com",
  name: "Fake Name",
  id: 1,
}

const HabitList = ({ habits, setHabits }: HabitListProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddHabit = () => {
    setHabits([...habits, { user, habit: inputValue.trim() }]);
    setInputValue("");
  };

  const handleRemoveHabit = (habitId: number) => {
    setHabits((old) => old.filter(habit => habit.id !== habitId));
  }

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Heading size="md" mb={4}>Habit List</Heading>
      <VStack align="stretch">
        <Input
          placeholder="Enter habit name"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleAddHabit(); }}
        />
        <Button colorScheme="teal" onClick={handleAddHabit}>Add Habit</Button>
        {habits.map((habit, idx) => (
          <Box key={idx} p={2} borderWidth={1} borderRadius="md" display="flex" alignItems="center" justifyContent="space-between">
            {habit.habit}
            <Button size="xs" colorScheme="red" ml={2} onClick={() => handleRemoveHabit(habit?.id || 0)}>X</Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default HabitList;

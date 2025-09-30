import { Box, Heading, VStack, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import type { HabitListProps as HabitListProps } from './types';

const HabitList = ({ habits, refetchHabits, createHabit, deleteHabit }: HabitListProps & { refetchHabits?: () => void }) => {


  // Functionality for refetching habits after adding and deleting
  const [inputValue, setInputValue] = useState("");

  const handleAddHabit = async () => {
    await createHabit(inputValue);
    setInputValue("");
    refetchHabits(); 
  };
  
  const handleDeleteHabit = async (id: number) => {
    await deleteHabit(id);
    refetchHabits(); 
  };


  return (
    <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Heading size="md" mb={4}>Habit List</Heading>
      <VStack align="stretch">
        <Input
          placeholder="Enter habit name"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleAddHabit}>Add Habit</Button>
        {habits.map((habit) => (
          <Box key={habit.id} p={2} borderWidth={1} borderRadius="md" display="flex" alignItems="center" justifyContent="space-between">
            {habit.habit}
            <Button size="xs" colorScheme="red" ml={2} onClick={() => handleDeleteHabit(habit.id)}>X</Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default HabitList;

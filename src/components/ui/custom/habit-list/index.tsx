import { Box, Heading, VStack, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import type { HabitListProps as HabitListProps } from './types';

const HabitList = ({ habits }: HabitListProps) => {
  console.log('[habits]', habits);
  const [inputValue, setInputValue] = useState("");

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Heading size="md" mb={4}>Habit List</Heading>
      <VStack align="stretch">
        <Input
          placeholder="Enter habit name"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        // onKeyDown={e => { if (e.key === 'Enter') handleAddHabit(); }}
        />
        <Button colorScheme="teal">Add Habit</Button>
        {habits.map((habit, idx) => (
          <Box key={idx} p={2} borderWidth={1} borderRadius="md" display="flex" alignItems="center" justifyContent="space-between">
            {habit.habit}
            {/* <Button size="xs" colorScheme="red" ml={2} onClick={() => handleRemoveHabit(habit?.id || 0)}>X</Button> */}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default HabitList;

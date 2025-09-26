import { Box, Heading, VStack, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { HabitList as HabitListProps } from './types';

const HabitList = (props: HabitListProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddHabit = () => {
    if (inputValue.trim() && props.setHabits) {
      props.setHabits([...props.habits, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Heading size="md" mb={4}>Habit List</Heading>
      <VStack spacing={4} align="stretch">
        <Input
          placeholder="Enter habit name"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleAddHabit(); }}
        />
        <Button colorScheme="teal" onClick={handleAddHabit}>Add Habit</Button>
        {props.habits && props.habits.map((habit, idx) => (
          <Box key={idx} p={2} borderWidth={1} borderRadius="md" display="flex" alignItems="center" justifyContent="space-between">
            {habit}
            <Button size="xs" colorScheme="red" ml={2} onClick={() => {
              if (props.setHabits) {
                props.setHabits(props.habits.filter((_, i) => i !== idx));
              }
            }}>X</Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default HabitList;

import { Box, Table, Heading, Flex, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const HabitTracker = (props) => {
  const [currentDayIdx, setCurrentDayIdx] = useState(1); // Default to Tuesday

  const handlePrev = () => {
    setCurrentDayIdx((prev) => (prev === 0 ? days.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentDayIdx((prev) => (prev === days.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {props.carousel === false ? (
        <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
          <Heading size="md" mb={4}>Habit Tracker</Heading>
          <Table.Root variant="outline" showColumnBorder>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Habit</Table.ColumnHeader>
                {days.map(day => (
                  <Table.ColumnHeader key={day}>{day}</Table.ColumnHeader>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {props.habits && props.habits.map((habit, idx) => (
                <Table.Row key={idx}>
                  <Table.Cell fontWeight="bold">{habit}</Table.Cell>
                  {days.map(day => (
                    <Table.Cell key={day}></Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
        ) : (
        <Flex justify="center" height="100%">
          <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md" width="450px">
            <Heading size="md" mb={4}>Habit Tracker</Heading>
            <Flex align="center" justify="center" mb={4} gap={4}>
                <Button onClick={handlePrev}>&lt;</Button>
                <Text fontWeight="bold" fontSize="lg">{days[currentDayIdx]}</Text>
                <Button onClick={handleNext}>&gt;</Button>
            </Flex>
            <Table.Root variant="outline" showColumnBorder>
                <Table.Header>
                <Table.Row>
                    <Table.ColumnHeader>Habit</Table.ColumnHeader>
                    <Table.ColumnHeader>{days[currentDayIdx]}</Table.ColumnHeader>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                {props.habits && props.habits.map((habit, idx) => (
                    <Table.Row key={idx}>
                    <Table.Cell fontWeight="bold">{habit}</Table.Cell>
                    <Table.Cell></Table.Cell>
                    </Table.Row>
                ))}
                </Table.Body>
            </Table.Root>
          </Box>
        </Flex>
      )}
    </>
  )
};

export default HabitTracker;

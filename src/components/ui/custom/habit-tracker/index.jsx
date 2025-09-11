import { Box, Table, Heading, Flex, Button, Text } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { useMeasure } from 'react-use';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const HabitTracker = (props) => {
  // State and handlers for carousel navigation:
  const [currentDayIdx, setCurrentDayIdx] = useState(1); // Default to Tuesday

  const handlePrev = () => {
    setCurrentDayIdx((prev) => (prev === 0 ? days.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentDayIdx((prev) => (prev === days.length - 1 ? 0 : prev + 1));
  };


  // Use useMeasure for element-based responsive design
  const [measureRef, { width }] = useMeasure();
  const [isMobile, setIsMobile] = useState(width < 661);

  useEffect(() => {
    setIsMobile(width < 661);
  }, [width]);


  return (
    <Box ref={measureRef} p={4} borderWidth={1} borderRadius="lg" boxShadow="md" >
      {isMobile ? (
        <>
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
        </>
      ) : (
        <>
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
        </>
      )}
    </Box>
  )
};

export default HabitTracker;

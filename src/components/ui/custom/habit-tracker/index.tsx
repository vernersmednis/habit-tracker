import { DashboardContext, type DashboardContextType } from '@/contexts/DashboardContext';
import { Box, Table, Heading, Checkbox, Flex, Button, Text } from '@chakra-ui/react';
import { useState, useEffect, useContext } from 'react';
import { useMeasure } from 'react-use';


const HabitTracker = () => {


  // Data from context
  const {
    habits, updateHabitWeekday, refetchHabitWeekdays, weekdays, habitWeekdays
  }: DashboardContextType = useContext(DashboardContext);

  // Function to handle toggling the isDone state of a habit for a specific weekday
  const handleToggleIsDone = async (habitId: string, weekdayId: string, isDone: boolean) => {
    await updateHabitWeekday(habitId, weekdayId, isDone); 
    refetchHabitWeekdays();
  };


  // State and handlers for carousel navigation:
  const [currentDayIdx, setCurrentDayIdx] = useState(1); // Default to Tuesday

  const handlePrev = () => {
    setCurrentDayIdx((prev) => (prev === 0 ? weekdays.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentDayIdx((prev) => (prev === weekdays.length - 1 ? 0 : prev + 1));
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
            <Text fontWeight="bold" fontSize="lg">{weekdays[currentDayIdx]?.weekday}</Text>
            <Button onClick={handleNext}>&gt;</Button>
          </Flex>
          <Table.Root variant="outline" showColumnBorder>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Habit</Table.ColumnHeader>
                <Table.ColumnHeader>{weekdays[currentDayIdx]?.weekday}</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {habits && habits.map((habit, idx) => {
                const weekdayId = weekdays[currentDayIdx]?.id;
                const hw = habitWeekdays.find(hw => hw.habit.id === habit.id && hw.weekday.id === weekdayId);
                return (
                  <Table.Row key={idx}>
                    <Table.Cell fontWeight="bold">{habit.habit}</Table.Cell>
                    <Table.Cell>
                      <Checkbox.Root
                        variant={"subtle"}
                        checked={hw?.isDone!}
                        onCheckedChange={() => handleToggleIsDone(hw?.habit.id!, hw?.weekday.id!, !hw?.isDone!)}
                      >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                      </Checkbox.Root>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
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
                {weekdays.map(weekday => (
                  <Table.ColumnHeader key={weekday.id}>{weekday.weekday}</Table.ColumnHeader>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {habits && habits.map((habit, idx) => (
                <Table.Row key={idx}>
                  <Table.Cell fontWeight="bold">{habit.habit}</Table.Cell>
                  {weekdays.map(weekday => {
                    const hw = habitWeekdays.find(hw => hw.habit.id === habit.id && hw.weekday.id === weekday.id);
                    return (
                      <Table.Cell key={weekday.id}>
                        <Checkbox.Root
                          variant={"subtle"}
                          checked={hw?.isDone!}
                          onCheckedChange={() => handleToggleIsDone(hw?.habit.id!, hw?.weekday.id!, !hw?.isDone!)}
                        >
                          <Checkbox.HiddenInput />
                          <Checkbox.Control />
                        </Checkbox.Root>
                      </Table.Cell>
                    );
                  })}
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

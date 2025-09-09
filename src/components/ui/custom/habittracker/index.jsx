import { Box, Table, Heading } from '@chakra-ui/react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const HabitTracker = (props) => {
  return (
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
  );
};

export default HabitTracker;

import { Tabs } from "@chakra-ui/react";
import { HabitListContainer, HabitTrackerContainer } from "./styles";
import HabitList from "@/components/ui/custom/habit-list";
import HabitTracker from "@/components/ui/custom/habit-tracker";
import { useState } from "react";

export const DashboardMobileView = () => {
    const [activeTab, setActiveTab] = useState('habit-list');

    return (
        <Tabs.Root display="flex" flexDirection="column" variant="enclosed" colorScheme="blue" value={activeTab} onValueChange={(e) => setActiveTab(e.value)}>
            <Tabs.List display="flex" alignItems="center" whiteSpace="nowrap" borderBottom="1px solid #eee">
                <Tabs.Trigger value="habit-list" width="50%">Habits</Tabs.Trigger>
                <Tabs.Trigger value="habit-tracker" width="50%">Tracker</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="habit-list">
                <HabitListContainer>
                    <HabitList />
                </HabitListContainer>
            </Tabs.Content>
            <Tabs.Content value="habit-tracker">
                <HabitTrackerContainer>
                    <HabitTracker />
                </HabitTrackerContainer>
            </Tabs.Content>
        </Tabs.Root>
    )
}
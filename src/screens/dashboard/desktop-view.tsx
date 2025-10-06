import HabitList from "@/components/ui/custom/habit-list"
import HabitTracker from "@/components/ui/custom/habit-tracker"

import { DashboardContentContainer } from "./styles"

export const DashboardDesktopView = () => {
    return (
        <DashboardContentContainer>
            <HabitList />
            <HabitTracker />
        </DashboardContentContainer>
    )
}
import { useMediaQuery } from '@chakra-ui/react';
import { DashboardProvider } from '@/contexts/DashboardContext';
import { DashboardMobileView } from './mobile-view';
import { DashboardDesktopView } from './desktop-view';

function DashboardContent() {
  // Use Chakra UI's useMediaQuery for responsive design
  const [isMobile] = useMediaQuery(['(max-width: 900px)']);

  if (isMobile) return <DashboardMobileView />

  return <DashboardDesktopView />
}

function Dashboard() {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
}

export default Dashboard;


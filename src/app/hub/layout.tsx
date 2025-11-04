import AgentList from '@/components/layout/agent-list';
import AppHeader from '@/components/layout/header';
import { Sidebar, SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function HubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <Sidebar collapsible="icon" className="border-r">
                <AgentList />
            </Sidebar>
            <SidebarInset className="flex flex-col max-h-screen">
                <AppHeader />
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}

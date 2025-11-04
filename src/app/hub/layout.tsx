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
            <div className="flex flex-col h-screen">
                <AppHeader />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar collapsible="icon" className="border-r">
                        <AgentList />
                    </Sidebar>
                    <SidebarInset className="flex flex-col flex-1">
                        {children}
                    </SidebarInset>
                </div>
            </div>
        </SidebarProvider>
    );
}

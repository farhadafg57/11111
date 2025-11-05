import AgentList from '@/components/layout/agent-list';
import AppHeader from '@/components/layout/header';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';

export default function HubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen">
            <AppHeader />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar collapsible="icon" className="border-r">
                    <AgentList />
                </Sidebar>
                <SidebarInset>
                    {children}
                </SidebarInset>
            </div>
        </div>
    );
}

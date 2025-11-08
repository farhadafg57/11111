import AgentList from "@/components/layout/agent-list";
import AppHeader from "@/components/layout/header";
import CanvasPage from "./[agentId]/canvas";

export default function HubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen bg-background">
            <AppHeader />
            <div className="flex-1 grid md:grid-cols-[280px_1fr] overflow-hidden">
                <aside className="hidden md:flex md:flex-col border-r">
                    <AgentList />
                </aside>
                <main className="relative flex flex-col h-full">
                    <div className="absolute inset-0 z-0">
                        <CanvasPage />
                    </div>
                    <div className="z-10 flex-1 flex flex-col">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

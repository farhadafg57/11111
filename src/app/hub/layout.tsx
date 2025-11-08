import AgentList from "@/components/layout/agent-list";
import AppHeader from "@/components/layout/header";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import CanvasPage from "./[agentId]/canvas";

export default function HubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen bg-background relative">
             <AppHeader />
            <div className="absolute inset-0 z-0 top-16">
                <CanvasPage />
            </div>
            <div className="z-10 flex-1 flex flex-col">
              {children}
            </div>
        </div>
    );
}

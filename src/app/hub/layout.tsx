import CanvasPage from "./[agentId]/canvas";

export default function HubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen bg-background relative">
            <div className="absolute inset-0 z-0">
                <CanvasPage />
            </div>
            {children}
        </div>
    );
}

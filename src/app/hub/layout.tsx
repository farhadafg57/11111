export default function HubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen bg-background">
            {children}
        </div>
    );
}

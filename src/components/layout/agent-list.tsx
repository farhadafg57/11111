import { agents } from '@/lib/agents';
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AgentList() {
  return (
    <>
      <SidebarHeader className="text-center p-4 border-b">
        <h2 className="text-2xl font-headline font-semibold group-data-[collapsible=icon]:hidden">
          Scriptorium
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Agents</SidebarGroupLabel>
          <SidebarMenu>
            {agents.map((agent) => (
              <SidebarMenuItem key={agent.name}>
                <SidebarMenuButton tooltip={agent.name} isActive={false} className="justify-start">
                  <agent.Icon />
                  <span className="font-body">{agent.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mt-auto border-t">
        <div className="flex items-center gap-3 p-3 group-data-[collapsible=icon]:justify-center">
            <Avatar className="size-9">
                <AvatarImage src="https://picsum.photos/seed/user/100/100" alt="User" data-ai-hint="portrait person" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-medium text-sidebar-foreground">Guest User</span>
                <span className="text-xs text-sidebar-foreground/70">Online</span>
            </div>
        </div>
      </SidebarFooter>
    </>
  );
}

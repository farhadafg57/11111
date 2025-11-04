'use client';

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
import { useAuth, useUser } from '@/firebase';
import { Skeleton } from '../ui/skeleton';
import { Button } from '../ui/button';
import { initiateAnonymousSignIn } from '@/firebase/non-blocking-login';
import { LogIn } from 'lucide-react';

const UserStatus = () => {
    const auth = useAuth();
    const { user, isUserLoading } = useUser();

    if (isUserLoading) {
        return (
            <div className="flex items-center gap-3 p-3 group-data-[collapsible=icon]:justify-center">
                <Skeleton className="size-9 rounded-full" />
                <div className="flex flex-col gap-1 group-data-[collapsible=icon]:hidden">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-16" />
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="p-3">
                 <Button 
                    onClick={() => initiateAnonymousSignIn(auth)} 
                    className="w-full"
                    variant="outline"
                 >
                    <LogIn className="mr-2" />
                    <span className='group-data-[collapsible=icon]:hidden'>Sign In Anonymously</span>
                </Button>
            </div>
        )
    }

    return (
         <div className="flex items-center gap-3 p-3 group-data-[collapsible=icon]:justify-center">
            <Avatar className="size-9">
                <AvatarImage src={`https://picsum.photos/seed/${user.uid}/100/100`} alt="User" data-ai-hint="portrait person" />
                <AvatarFallback>{user.isAnonymous ? 'A' : 'U'}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-medium text-sidebar-foreground truncate">{user.isAnonymous ? 'Anonymous User' : user.email || 'User'}</span>
                <span className="text-xs text-sidebar-foreground/70">{user.uid.substring(0,8)}...</span>
            </div>
        </div>
    )
}

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
        <UserStatus />
      </SidebarFooter>
    </>
  );
}

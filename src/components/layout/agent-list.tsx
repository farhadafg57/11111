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
import { useLanguage } from '@/lib/language';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import placeholderData from '@/lib/placeholder-images.json';

const UserStatus = () => {
    const auth = useAuth();
    const { user, isUserLoading } = useUser();
    const { t } = useLanguage();
    const userAvatarImage = placeholderData.images.find(img => img.id === 'user-avatar-sidebar');

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
                    <span className='group-data-[collapsible=icon]:hidden'>{t('signInAnonymously')}</span>
                </Button>
            </div>
        )
    }

    const avatarSrc = userAvatarImage ? userAvatarImage.src.replace('{{id}}', user.uid) : '';

    return (
         <div className="flex items-center gap-3 p-3 group-data-[collapsible=icon]:justify-center">
            <Avatar className="size-9">
                {userAvatarImage && (
                    <AvatarImage src={avatarSrc} alt="User" width={userAvatarImage.width} height={userAvatarImage.height} data-ai-hint={userAvatarImage.hint} />
                )}
                <AvatarFallback>{user.isAnonymous ? 'A' : 'U'}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-medium text-sidebar-foreground truncate">{user.isAnonymous ? t('anonymousUser') : user.email || t('user')}</span>
                <span className="text-xs text-sidebar-foreground/70">{user.uid.substring(0,8)}...</span>
            </div>
        </div>
    )
}

export default function AgentList() {
  const { t } = useLanguage();
  const params = useParams();
  const { agentId } = params;

  return (
    <>
      <SidebarHeader className="text-center p-4 border-b">
        <h2 className="text-2xl font-headline font-semibold group-data-[collapsible=icon]:hidden">
          {t('scriptorium')}
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t('agents')}</SidebarGroupLabel>
          <SidebarMenu>
            {agents.map((agent) => (
              <SidebarMenuItem key={agent.slug}>
                <Link href={`/hub/${agent.slug}`} passHref legacyBehavior>
                  <SidebarMenuButton as="a" tooltip={agent.name} isActive={agentId === agent.slug} className="justify-start">
                    <agent.Icon />
                    <span className="font-body">{agent.name}</span>
                  </SidebarMenuButton>
                </Link>
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

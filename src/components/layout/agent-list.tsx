'use client';

import { agents } from '@/lib/agents';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar';
import { useAuth, useUser } from '@/firebase';
import { Skeleton } from '../ui/skeleton';
import { Button } from '../ui/button';
import { initiateAnonymousSignIn } from '@/firebase/non-blocking-login';
import { LogIn } from 'lucide-react';
import { useLanguage } from '@/lib/language';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import placeholderData from '@/lib/placeholder-images.json';
import { useCallback } from 'react';
import { ScrollArea } from '../ui/scroll-area';

const UserStatus = () => {
    const auth = useAuth();
    const { user, isUserLoading } = useUser();
    const { t } = useLanguage();
    const userAvatarImage = placeholderData.images.find(img => img.id === 'user-avatar-sidebar');

    if (isUserLoading) {
        return (
            <div className="flex items-center gap-3 p-4">
                <Skeleton className="size-9 rounded-full" />
                <div className="flex flex-col gap-1">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-16" />
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="p-2">
                 <Button 
                    onClick={() => initiateAnonymousSignIn(auth)} 
                    className="w-full"
                    variant="outline"
                 >
                    <LogIn className="mr-2" />
                    <span>{t('signInAnonymously')}</span>
                </Button>
            </div>
        )
    }

    const avatarSrc = userAvatarImage && user.uid ? userAvatarImage.src.replace('{{id}}', user.uid) : '';

    return (
         <div className="flex items-center gap-3 p-4">
            <Avatar className="size-9">
                {avatarSrc && (
                    <AvatarImage src={avatarSrc} alt="User" width={userAvatarImage.width} height={userAvatarImage.height} data-ai-hint={userAvatarImage.hint} />
                )}
                <AvatarFallback>{user.isAnonymous ? 'A' : (user.email ? user.email.charAt(0).toUpperCase() : 'U')}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-medium text-foreground truncate">{user.isAnonymous ? t('anonymousUser') : user.email || t('user')}</span>
                <span className="text-xs text-muted-foreground truncate">{user.uid}</span>
            </div>
        </div>
    )
}

type AgentListProps = {
  onAgentSelect?: () => void;
};

export default function AgentList({ onAgentSelect }: AgentListProps) {
  const { t } = useLanguage();
  const router = useRouter();
  const params = useParams();
  const agentId = params.agentId as string;

  const handleAgentSelect = useCallback((agentSlug: string) => {
    router.push(`/hub/${agentSlug}`);
    // If the onAgentSelect callback is provided (from the mobile sheet), call it.
    if (onAgentSelect) {
      onAgentSelect();
    }
  }, [router, onAgentSelect]);

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="p-4 border-b">
        <h2 className="text-2xl font-headline font-semibold">
          {t('scriptorium')}
        </h2>
      </div>
      <ScrollArea className="flex-1">
        <nav className="p-2">
          <ul>
            {agents.map((agent) => (
              <li key={agent.slug}>
                <Button
                  onClick={() => handleAgentSelect(agent.slug)}
                  variant={agent.slug === agentId ? 'secondary' : 'ghost'}
                  className="w-full justify-start gap-3 h-12"
                >
                  <agent.Icon className="size-5 text-primary" />
                  <span className="font-body truncate">{agent.name}</span>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>
      <div className="mt-auto border-t">
        <UserStatus />
      </div>
    </div>
  );
}

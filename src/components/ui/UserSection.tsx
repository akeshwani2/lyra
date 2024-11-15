'use client';

import { UserButton, useUser, useAuth } from '@clerk/nextjs';
import { dark } from "@clerk/themes";

export default function UserSection() {
    const { user } = useUser();
    const { isSignedIn, isLoaded } = useAuth();

    return (
        <div className="absolute top-4 right-8 flex items-center gap-3">
            {isLoaded && isSignedIn && (
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text text-xl font-bold">
                    {user?.username || user?.firstName || ''}
                </span>
            )}
            {isLoaded && (
                <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                        baseTheme: dark,
                        elements: {
                            avatarBox: "w-10 h-10",
                            userButtonTrigger: "p-2",
                            userButtonPopoverCard: "min-w-[240px]"
                        }
                    }}
                />
            )}
        </div>
    );
}
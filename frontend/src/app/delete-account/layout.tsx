import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Delete Account | MeemZee - Language Learning Platform",
    description: "Safely delete your MeemZee account. Learn about account deletion, data retention policies, and the grace period for account recovery.",
    keywords: "delete account, account deletion, MeemZee account, account management, delete MeemZee account",
    robots: "noindex, nofollow",
    openGraph: {
        title: "Delete Your MeemZee Account",
        description: "Safely delete your MeemZee account. Learn about account deletion, data retention policies, and the grace period for account recovery.",
        type: "website",
        siteName: "MeemZee",
    },
}

export default function DeleteAccountLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}

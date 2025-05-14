export interface EmailPreference {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    category: "communication" | "announcement";
}

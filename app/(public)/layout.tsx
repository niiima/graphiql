import { I18nProviderClient } from '@/app/I18nProviderClient'; // Adjust path if needed
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <I18nProviderClient>
            <ThemeProvider>
                <div className="min-h-screen bg-white dark:bg-gray-800 transition-colors">
                    <Navbar />{children}<Footer />
                </div>
            </ThemeProvider>
        </I18nProviderClient>
    );
}
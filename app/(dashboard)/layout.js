import { SidebarTrigger } from "@/components/ui/sidebar";
import SidebarNav from "@/components/client/sidebar-nav/sidebar";

export default function DashboardLayout({ children }) {
    return (
            <div className="flex w-full h-screen">
                <SidebarNav />
                <main className="flex-1 w-full">
                    <header className="flex h-16 pt-6 pl-2"><SidebarTrigger/></header>
                    <div className="py-2 px-6">{children}</div>
                </main>
            </div>
    );
}
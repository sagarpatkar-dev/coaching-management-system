import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarNav from "@/components/client/sidebar-nav/sidebar";

export default function DashboardLayout({ children }) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-[#0f172a]">
                <SidebarNav />

                <main className="flex-1 bg-[#111827] text-white">
                    <header className="flex h-16 items-center border-b border-slate-800 px-4">
                        <SidebarTrigger />
                    </header>

                    <div className="p-6">
                        {children}
                    </div>
                </main>
            </div>
        </SidebarProvider>
    );
}
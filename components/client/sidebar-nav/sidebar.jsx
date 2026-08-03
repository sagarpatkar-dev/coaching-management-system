"use client"
import {useState} from "react";
import Image from "next/image";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import {menuButton, menuName} from "@/constants/icons";

export default function SidebarNav() {
    const [currentMenu, setCurrentMenu] = useState("dashboard");
    const menuIconClick = (menu) => {
        setCurrentMenu(menu);
    }
    return (
        <Sidebar className="border-r border-slate-800 bg-[#ffff] text-slate-200 px-4 py-5">
            <SidebarHeader className="border-b border-slate-800 w-full">
                {/*<h2 className="text-lg font-bold text-white">Football Coach</h2>*/}
                {/*<p className="text-sm text-slate-400">Admin Dashboard</p>*/}
                <Image src="/images/EliteLogo.png" alt="Elite Logo" width={100} height={40} className="bg-white"/>
            </SidebarHeader>

            <SidebarContent className="">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-slate-500">
                        Main Menu
                    </SidebarGroupLabel>
                    <SidebarMenu className="mt-3 space-y-2">
                        {menuName && menuName.length !== 0 && menuName.map((item) => (
                            <SidebarMenuItem key={item}>
                                <SidebarMenuButton onClick={() => menuIconClick(item)} className={`${currentMenu === item ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"} rounded-lg cursor-pointer`}>
                                    {menuButton(item)}
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-slate-800 px-4 py-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white">
                        S
                    </div>

                    <div>
                        <p className="text-sm font-medium text-white">Sagar</p>
                        <p className="text-xs text-slate-400">Admin</p>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
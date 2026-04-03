import {
    LayoutDashboard,
    CalendarCheck,
    Users,
    Wallet,
    Trophy,
} from "lucide-react";
export const menuButton = (menuName) => {
    switch(menuName){
        case "dashboard": return (
            <>
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
            </>
        )
        case "attendance": return (
            <>
                <CalendarCheck className="h-4 w-4" />
                <span>Attendance</span>
            </>
        )
        case "students": return (
            <>
                <Users className="h-4 w-4" />
                <span>Students</span>
            </>
        )
        case "payments": return (
            <>
                <Wallet className="h-4 w-4" />
                <span>Payments</span>
            </>
        )
        case "matches": return (
            <>
                <Trophy className="h-4 w-4" />
                <span>Matches</span>
            </>
        )
        default: return null
    }
}
export const menuName = ["dashboard", "attendance", "students", "payments", "matches"];
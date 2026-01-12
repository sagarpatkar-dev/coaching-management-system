mock-data.js
// Mock data for the coaching management system

export const Student = {
    id: string
    name: string
    age: number
    batch: string
    contactNumber: string
    feesStatus: "Paid" | "Pending"
    totalFees: number
    paidAmount: number
    pendingAmount: number
}

export const AttendanceRecord = {
    studentId: string
    studentName: string
    status: "Present" | "Absent"
    date: string
}

export const Student = [
    {
        id: "1",
        name: "Aarav Sharma",
        age: 8,
        batch: "Morning",
        contactNumber: "+91 98765 43210",
        feesStatus: "Paid",
        totalFees: 5000,
        paidAmount: 5000,
        pendingAmount: 0,
    },
    {
        id: "2",
        name: "Priya Patel",
        age: 11,
        batch: "Evening",
        contactNumber: "+91 98765 43211",
        feesStatus: "Pending",
        totalFees: 5000,
        paidAmount: 2500,
        pendingAmount: 2500,
    },
    {
        id: "3",
        name: "Rohan Gupta",
        age: 14,
        batch: "Morning",
        contactNumber: "+91 98765 43212",
        feesStatus: "Paid",
        totalFees: 6000,
        paidAmount: 6000,
        pendingAmount: 0,
    },
    {
        id: "4",
        name: "Ananya Singh",
        age: 7,
        batch: "Afternoon",
        contactNumber: "+91 98765 43213",
        feesStatus: "Pending",
        totalFees: 4500,
        paidAmount: 1500,
        pendingAmount: 3000,
    },
    {
        id: "5",
        name: "Vikram Reddy",
        age: 13,
        batch: "Morning",
        contactNumber: "+91 98765 43214",
        feesStatus: "Paid",
        totalFees: 6000,
        paidAmount: 6000,
        pendingAmount: 0,
    },
    {
        id: "6",
        name: "Sneha Iyer",
        age: 10,
        batch: "Evening",
        contactNumber: "+91 98765 43215",
        feesStatus: "Paid",
        totalFees: 5000,
        paidAmount: 5000,
        pendingAmount: 0,
    },
    {
        id: "7",
        name: "Arjun Kumar",
        age: 12,
        batch: "Afternoon",
        contactNumber: "+91 98765 43216",
        feesStatus: "Pending",
        totalFees: 5500,
        paidAmount: 2000,
        pendingAmount: 3500,
    },
    {
        id: "8",
        name: "Kavya Nair",
        age: 9,
        batch: "Morning",
        contactNumber: "+91 98765 43217",
        feesStatus: "Paid",
        totalFees: 5000,
        paidAmount: 5000,
        pendingAmount: 0,
    },
    {
        id: "9",
        name: "Rahul Verma",
        age: 15,
        batch: "Evening",
        contactNumber: "+91 98765 43218",
        feesStatus: "Pending",
        totalFees: 6500,
        paidAmount: 3000,
        pendingAmount: 3500,
    },
    {
        id: "10",
        name: "Meera Das",
        age: 8,
        batch: "Afternoon",
        contactNumber: "+91 98765 43219",
        feesStatus: "Paid",
        totalFees: 4500,
        paidAmount: 4500,
        pendingAmount: 0,
    },
    {
        id: "11",
        name: "Aditya Joshi",
        age: 14,
        batch: "Morning",
        contactNumber: "+91 98765 43220",
        feesStatus: "Paid",
        totalFees: 6000,
        paidAmount: 6000,
        pendingAmount: 0,
    },
    {
        id: "12",
        name: "Ishita Mehta",
        age: 11,
        batch: "Evening",
        contactNumber: "+91 98765 43221",
        feesStatus: "Pending",
        totalFees: 5000,
        paidAmount: 1000,
        pendingAmount: 4000,
    },
]

export const getStudentsByAgeGroup = () => {
    return {
        under9: students.filter((s) => s.age < 9),
        under12: students.filter((s) => s.age >= 9 && s.age < 12),
        under15: students.filter((s) => s.age >= 12 && s.age <= 15),
    }
}

export const getDashboardStats = () => {
    const totalStudents = students.length
    const totalRevenue = students.reduce((sum, s) => sum + s.paidAmount, 0)
    const pendingStudents = students.filter((s) => s.feesStatus === "Pending").length
    const totalPendingRevenue = students.reduce((sum, s) => sum + s.pendingAmount, 0)
    const attendancePercentage = 87 // Mock value

    return {
        totalStudents,
        totalRevenue,
        pendingStudents,
        totalPendingRevenue,
        attendancePercentage,
    }
}

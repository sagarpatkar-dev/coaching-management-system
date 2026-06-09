import React from 'react';

export default function Introduction() {
    const currentHour = new Date().getHours();
    const currentDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    const greetingTime = currentHour < 12 ? "Morning" : currentHour < 18 ? "Afternoon" : "Evening";
    const userName = "Sagar";
    return (
        <div>
            <div className="flex justify-between gap-2">
                <span>Good {greetingTime} {userName}</span>
                <span>{currentDate}</span>
            </div>

        </div>
    );
}
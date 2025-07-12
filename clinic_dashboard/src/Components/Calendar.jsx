import { useState, useEffect } from "react";    
import { CalendarIcon, LogOut, Plus } from "lucide-react";
import MonthView from "./MonthView"; 
import DayView from "./DayView"; 
import AppointmentModel from "./AppointmentModel"; 
import "./Calendar.css";

export default function Calendar() { 
    const [currentDate, setCurrentDate] = useState(new Date()); 
    const [selectedDate, setSelectedDate] = useState(new Date()); 
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [appointments, setAppointments] = useState({}); 
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => { 
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
     window.addEventListener("resize", handleResize); 
     return () => window.removeEventListener("resize", handleResize); }, []);

const handleNew = (date) => { setSelectedDate(date); setIsModalOpen(true); };

const addAppointment = (dateStr, note) => { setAppointments((prev) => ({ ...prev, [dateStr]: [...(prev[dateStr] || []), note], })); };

const logout = () => alert("Logged out!");

return ( <div className="calendar-wrapper"> <header className="calendar-header"> <div className="calendar-title-group"> <div className="calendar-icon"> <CalendarIcon size={16} color="white" /> </div> <div> <h2>Appointment Calendar</h2> <p>{currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p> </div> </div> <div className="calendar-actions"> <button className="calendar-button" onClick={() => handleNew(new Date())}> <Plus size={16} /> <span>New</span> </button> <button className="calendar-button" onClick={logout}> <LogOut size={16} /> <span>Logout</span> </button> </div> </header>

<main>
    {isMobile ? (
      <DayView
        date={selectedDate}
        appointments={appointments}
        onAdd={() => handleNew(selectedDate)}
      />
    ) : (
      <MonthView
        currentDate={currentDate}
        appointments={appointments}
        onDateClick={handleNew}
      />
    )}
  </main>

  <AppointmentModel
    open={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    date={selectedDate}
    onSave={addAppointment}
  />
</div>

); }
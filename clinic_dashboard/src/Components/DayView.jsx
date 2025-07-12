export default function DayView({ date, appointments, onAdd }) { 
    const dateStr = date.toISOString().split("T")[0]; 
    const items = appointments[dateStr] || [];

return ( 
<div className="day-view"> 
    <h3>{date.toDateString()}</h3> 
    <button onClick={onAdd}>+ Add Appointment</button>
     <ul> {items.length === 0 && <li>No appointments</li>} 
     {items.map((a, i) => <li key={i}>{a}</li>)} </ul> </div> ); }
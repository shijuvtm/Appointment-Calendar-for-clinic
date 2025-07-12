export default function MonthView({ currentDate, appointments, onDateClick }) { 
    const start = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1); 
    const end = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0); 
    const days = [];

for (let i = 1; i <= end.getDate(); i++) 
    { 
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
        const key = date.toISOString().split("T")[0];
        days.push( <div className="calendar-day" key={i} onClick={() => onDateClick(date)}> <strong>{i}</strong> <ul> {(appointments[key] || []).map((a, idx) => ( <li key={idx}>{a}</li> ))} </ul> </div> ); }

return <div className="calendar-grid">{days}</div>; }
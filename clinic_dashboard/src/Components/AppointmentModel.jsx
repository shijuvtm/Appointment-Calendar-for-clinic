import { useState } from "react";

export default function AppointmentModal({ open, date, onClose, onSave }) { 
    
    const [note, setNote] = useState("");

if (!open) return null;

const handleSubmit = () => { const dateStr = date.toISOString().split("T")[0]; 
    if (note.trim()) onSave(dateStr, note); setNote(""); onClose(); };

return ( 
<div className="modal-backdrop"> <
    div className="modal"> 
    <h3>Add Appointment on {date.toDateString()}</h3>
     <textarea value={note} onChange={(e) => setNote(e.target.value)} /> 
        <div className="modal-actions"> 
            <button onClick={onClose}>Cancel</button> 
            <button onClick={handleSubmit}>Save</button> </div> </div> </div> ); }
import React, { useState, useEffect } from "react";
import TicketForm from "./TicketForm";
import TicketGrid from "./ShowTicketList";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({
    event: "",
    date: "",
    location: "",
    price: "",
    image: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://hamedmkm.github.io/API-booking-Ticket/db.json");
        if (!response.ok) throw new Error("Failed to fetch tickets.");
        const data = await response.json();
        setTickets(data.tickets);  // اطمینان حاصل کنید که داده‌ها آرایه بلیط‌ها هستند
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTickets();
  }, []);
  

  const handleAddTicket = async () => {
    if (Object.values(newTicket).some((field) => !field)) {
      alert("لطفاً تمام فیلدها را پر کنید.");
      return;
    }
    try {
      const response = await fetch("https://hamedmkm.github.io/API-booking-Ticket/db.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
     
        body: JSON.stringify(newTicket),
      });

      if (response.ok) {
        const addedTicket = await response.json();
        setTickets((prev) => [...prev, addedTicket]);
        setNewTicket({ event: "", date: "", location: "", price: "",image :"" });
      } else {
        alert("خطا در افزودن بلیط.");
      }
    } catch (err) {
      console.error("Error adding ticket:", err);
    }
  };

  const handleEditTicket = async (id, updatedTicket) => {
    try {
      const response = await fetch(`https://hamedmkm.github.io/API-booking-Ticket/db.json/${id}`, {
        method: "PUT",
    
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTicket),
      });

      if (response.ok) {
        const updatedTickets = tickets.map((ticket) =>
          ticket.id === id ? { ...ticket, ...updatedTicket } : ticket
        );
        setTickets(updatedTickets);
      } else {
        alert("خطا در ویرایش بلیط.");
      }
    } catch (err) {
      console.error("Error editing ticket:", err);
    }
  };

  const handleDeleteTicket = async (id) => {
    try {
      const response = await fetch(`https://hamedmkm.github.io/API-booking-Ticket/db.json/${id}`, {
        method: "DELETE",
   
      });

      if (response.ok) {
        setTickets((prev) => prev.filter((ticket) => ticket.id !== id));
      } else {
        alert("خطا در حذف بلیط.");
      }
    } catch (err) {
      console.error("Error deleting ticket:", err);
    }
  };

  if (loading) return <div className="p-4">در حال بارگذاری...</div>;
  if (error) return <div className="p-4 text-red-500">خطا: {error}</div>;

  return (
    <div className="flex flex-col p-4 items-center ">
     <h1 className="text-2xl font-bold my-10 text-center pt-5 items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
  Dashboard
</h1>

      <TicketForm
        newTicket={newTicket}
        setNewTicket={setNewTicket}
        handleAddTicket={handleAddTicket}
      />

      <h2 className="text-2xl font-bold mb-4 text-center  items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">لیست بلیط‌ها</h2>

      <TicketGrid
        tickets={tickets}
        handleEditTicket={handleEditTicket}
        handleDeleteTicket={handleDeleteTicket}
      />
    </div>
  );
};
export default Dashboard;

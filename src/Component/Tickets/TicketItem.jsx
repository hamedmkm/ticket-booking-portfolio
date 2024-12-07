import React from "react";

const TicketItem = ({ ticket }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="font-bold text-lg">{ticket.event}</h3>
      <p>تاریخ: {ticket.date}</p>
      <p>مکان: {ticket.location}</p>
      <p>قیمت: {ticket.price} تومان</p>
      <p>ظرفیت باقی‌مانده: {ticket.seatsAvailable}</p>
    </div>
  );
};

export default TicketItem;

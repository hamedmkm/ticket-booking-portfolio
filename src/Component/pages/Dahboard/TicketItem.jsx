import React, { useState } from "react";
import Swal from "sweetalert2";

const TicketItem = ({ ticket, handleEditTicket, handleDeleteTicket }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTicket, setEditedTicket] = useState(ticket);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTicket((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveEdit = () => {
    Swal.fire({
      title: "آیا از ذخیره تغییرات مطمئن هستید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، ذخیره کن",
      cancelButtonText: "لغو",
    }).then((result) => {
      if (result.isConfirmed) {
        handleEditTicket(ticket.id, editedTicket);
        setIsEditing(false);
        Swal.fire("تغییرات ذخیره شد!", "", "success");
      }
    });
  };

  const handleCancelEdit = () => {
    Swal.fire({
      title: "آیا مطمئن هستید که می‌خواهید تغییرات را لغو کنید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، لغو کن",
      cancelButtonText: "خیر",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsEditing(false);
        Swal.fire("تغییرات لغو شد!", "", "info");
      }
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "آیا مطمئن هستید که می‌خواهید این بلیط را حذف کنید؟",
      text: "این عملیات غیرقابل بازگشت است!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، حذف کن",
      cancelButtonText: "لغو",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteTicket(ticket.id);
        Swal.fire("بلیط حذف شد!", "", "success");
      }
    });
  };

  return (
    <div className="border p-4 rounded-md shadow-md">
      {isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            name="event"
            value={editedTicket.event}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="نام رویداد"
          />
          <input
            type="text"
            name="date"
            value={editedTicket.date}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="تاریخ رویداد"
          />
          <input
            type="text"
            name="location"
            value={editedTicket.location}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="محل برگزاری"
          />
          <input
            type="number"
            name="price"
            value={editedTicket.price}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="قیمت بلیط"
          />
          <input
            type="text"
            name="image"
            value={editedTicket.image}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="لینک تصویر"
          />
          <div className="flex space-x-2">
            <button
              onClick={handleSaveEdit}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              ذخیره تغییرات
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              لغو
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <img src={ticket.image} alt={ticket.event} className="w-full h-40 object-cover rounded" />
          <h3 className="text-xl font-semibold">{ticket.event}</h3>
          <p className="text-gray-600">{ticket.date}</p>
          <p className="text-gray-600">{ticket.location}</p>
          <p className="text-gray-800 font-bold">{ticket.price} تومان</p>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
            >
              ویرایش
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              حذف
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketItem;

import React from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TicketForm = ({ newTicket, setNewTicket, handleAddTicket }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTicket((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTicketWithSwal = () => {
    handleAddTicket();

    Swal.fire({
      title: "بلیط با موفقیت افزوده شد!",
      text: `بلیط "${newTicket.event}" با موفقیت ثبت شد.`,
      icon: "success",
      confirmButtonText: "باشه",
    });
  };

  return (
    <div className="p-4">
      <div className="mb-8 p-4 border rounded-lg w-full bg-white shadow-md">
        <h2 className="text-xl font-bold mb-6 text-center text-gray-700">
          افزودن بلیط جدید
        </h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="event"
            value={newTicket.event}
            onChange={handleInputChange}
            placeholder="نام رویداد"
            className="border p-2 rounded w-full"
          />
          <DatePicker
            selected={newTicket.date ? new Date(newTicket.date) : null}
            onChange={(date) =>
              setNewTicket((prev) => ({
                ...prev,
                date: date.toISOString().split("T")[0],
              }))
            }
            dateFormat="yyyy-MM-dd"
            placeholderText="تاریخ رویداد"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="location"
            value={newTicket.location}
            onChange={handleInputChange}
            placeholder="محل برگزاری"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="price"
            value={newTicket.price}
            onChange={handleInputChange}
            placeholder="قیمت بلیط"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="image"
            value={newTicket.image}
            onChange={handleInputChange}
            placeholder="لینک تصویر"
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          onClick={handleAddTicketWithSwal}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4 w-full"
        >
          افزودن بلیط
        </button>
      </div>
    </div>
  );
};

export default TicketForm;

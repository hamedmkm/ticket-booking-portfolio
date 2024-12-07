import Swal from "sweetalert2";

const Cart = ({ cartItems, handleRemoveItem }) => {
  const handleRemoveWithConfirmation = (index) => {
    Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "این آیتم از سبد خرید شما حذف خواهد شد.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله، حذف شود",
      cancelButtonText: "لغو",
    }).then((result) => {
      if (result.isConfirmed) {
        handleRemoveItem(index);
        Swal.fire("حذف شد!", "آیتم از سبد خرید شما حذف شد.", "success");
      }
    });
  };

  return (
    <div className="p-4 my-20 w-full">
      <h1 className="text-xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
        سبد خرید
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-center">سبد خرید شما خالی است.</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="border min-w-[200px] p-4 rounded shadow-md bg-gray-100 text-center flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.event}
                className="h-32 w-full object-cover rounded-md mb-4"
              />
              <h3 className="font-bold">{item.event}</h3>
              <p>تاریخ: {item.date}</p>
              <p>محل: {item.location}</p>
              <p>قیمت: {item.price} تومان</p>
              <button
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                onClick={() => handleRemoveWithConfirmation(index)}
              >
                لغو سفارش
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

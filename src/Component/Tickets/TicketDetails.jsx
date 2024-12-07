import { useParams } from "react-router-dom";

const TicketDetails = () => {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">جزئیات بلیط</h1>
      <p>شناسه بلیط: {id}</p>
      <p>اینجا اطلاعات کامل بلیط نمایش داده می‌شود.</p>
    </div>
  );
};

export default TicketDetails;

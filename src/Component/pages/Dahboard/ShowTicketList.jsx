import TicketItem from "./TicketItem";

const TicketList = ({ tickets, handleEditTicket, handleDeleteTicket }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          handleEditTicket={handleEditTicket}
          handleDeleteTicket={handleDeleteTicket}
        />
      ))}
    </div>
  );
};

export default TicketList;

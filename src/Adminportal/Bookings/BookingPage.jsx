import { useState } from "react";
import BookingList from "./BookingList";
import BookingDetails from "./BookingDetails";

function BookingPage() {
  const [selectedBooking, setSelectedBooking] = useState(null);

  return (
    <div>
      {!selectedBooking ? (
        <BookingList onSelectBooking={setSelectedBooking} />
      ) : (
        <BookingDetails booking={selectedBooking} goBack={() => setSelectedBooking(null)} />
      )}
    </div>
  );
}

export default BookingPage;

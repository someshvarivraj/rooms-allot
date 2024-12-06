import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Theme from "../../components/Theme.jsx";

const Dashboard = () => {
  const rooms = [
    "Room 1",
    "Room 2",
    "Room 3",
    "Room 4",
    "Room 5",
    "Room 5",
    "Room 6",
    "Room 7",
    "Room 8",
    "Room 9",
    "Room 10",
  ];
  const hours = Array.from({ length: 24 }, (_, i) => `${i}`);

  const bookings = {
    "Room 1": [2, 3, 4], // Booked hours for Room 1
    "Room 2": [10, 11, 12],
    "Room 3": [18, 19],
    "Room 4": [],
    "Room 5": [],
    "Room 6": [],
    "Room 7": [],
    "Room 8": [],
    "Room 9": [],
    "Room 10": [],
  };

  return (
    <div className="flex-col w-full min-h-screen  ">
      <Navbar />
      <div className="p-4">
        <div className="grid grid-cols-[150px_repeat(24,_1fr)] gap-2 border border-gray-400 p-2">
          {/* Header Row */}
          <div className="text-center border border-gray-400 ">Rooms</div>
          {hours.map((hour, index) => (
            <div key={index} className="text-center  border border-gray-400 ">
              {hour}
            </div>
          ))}
          {/* Room Rows */}
          {rooms.map((room, roomIndex) => (
            <React.Fragment key={roomIndex}>
              {/* Room Name */}
              <div className=" border border-gray-400 flex items-center justify-center">
                {room}
              </div>
              {/* Hour Cells */}
              {hours.map((_, hourIndex) => (
                <div
                  key={hourIndex}
                  className={`border border-gray-300 flex items-center justify-center ${
                    bookings[room].includes(hourIndex)
                      ? "bg-red-500"
                      : "bg-green-500"
                  }`}
                >
                  {bookings[room].includes(hourIndex) ? "" : ""}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="pagination w-full flex justify-center items-center p-4">
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page 1</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

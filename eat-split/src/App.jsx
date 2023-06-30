import { useState } from "react";
import Sidebar from "./Sidebar";
import SplitBillForm from "./SplitBillForm";

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(friend) {
    setFriends((prev) => [...prev, friend]);
  }

  function handleSelectFriend(id) {
    setSelectedFriend(friends.filter((friend) => friend.id === id)[0]);
  }

  function handleSplitBill(id, diff) {
    setFriends((prev) =>
      [...prev].map((friend) =>
        friend.id === id ? { ...friend, balance: diff } : friend
      )
    );
  }

  return (
    <div className="app">
      <Sidebar
        friends={friends}
        onAddFriend={handleAddFriend}
        onSelectFriend={handleSelectFriend}
        selectedFriend={selectedFriend}
      />
      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;

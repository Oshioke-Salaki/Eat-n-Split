import AddFriendForm from "./AddFriendForm";
import Friend from "./Friend";

/* eslint-disable react/prop-types */
function Sidebar({ friends, onAddFriend, onSelectFriend, selectedFriend }) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            data={friend}
            id={friend.id}
            balance={friend.balance}
            onSelectFriend={onSelectFriend}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
      <AddFriendForm onAddFriend={onAddFriend} />
    </div>
  );
}

export default Sidebar;

/* eslint-disable react/prop-types */
function Friend({ data, onSelectFriend, selectedFriend }) {
  return (
    <li className={selectedFriend?.id === data.id ? "selected" : ""}>
      <img src={data.image} alt="" />
      <h3>{data.name}</h3>
      {data.balance === 0 && <p>You and {data.name} are even!</p>}
      {data.balance > 0 && (
        <p className="green">
          {data.name} owes you ${data.balance}
        </p>
      )}
      {data.balance < 0 && (
        <p className="red">
          You owe {data.name} ${Math.abs(data.balance)}
        </p>
      )}
      {selectedFriend && data.id === selectedFriend.id ? (
        <button className="button" onClick={() => onSelectFriend(null)}>
          Close
        </button>
      ) : (
        <button className="button" onClick={() => onSelectFriend(data.id)}>
          Select
        </button>
      )}
    </li>
  );
}

export default Friend;

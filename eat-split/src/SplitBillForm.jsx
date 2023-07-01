import { useState } from "react";

/* eslint-disable react/prop-types */
function SplitBillForm({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");

  const [payer, setPayer] = useState("you");

  function split(e) {
    e.preventDefault();
    if (!bill || !myExpense) return;
    let diff = +bill - +myExpense;

    onSplitBill(payer === "you" ? diff : -myExpense);

    setBill("");
    setMyExpense("");
    setPayer("you");
  }
  return (
    <form className="form-split-bill" onSubmit={split}>
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
      <label>🤑 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <label>👦Your expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) => {
          setMyExpense(+e.target.value > bill ? myExpense : +e.target.value);
        }}
      />
      <label>👦{selectedFriend.name} expense:</label>
      <input type="text" disabled value={bill ? +bill - +myExpense : ""} />
      <label>🤑 Who is paying the bill?</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="you">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}

export default SplitBillForm;

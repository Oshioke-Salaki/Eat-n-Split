/* eslint-disable react/prop-types */
import { useState } from "react";

function AddFriendForm({ onAddFriend }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !img) return;
    onAddFriend({
      id: Date.now(),
      name,
      image: img,
      balance: 0,
    });

    setName("");
    setImg("");
    setIsOpen(false);
  }

  function toggleIsOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div>
      {isOpen ? (
        <>
          <form className="form-add-friend" onSubmit={handleSubmit}>
            <label htmlFor="name">👌Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="img">🖼️ Image URL</label>
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <button className="button">Add</button>
          </form>
          <button className="button" onClick={toggleIsOpen}>
            close
          </button>
        </>
      ) : (
        <button className="button" onClick={toggleIsOpen}>
          Add friend
        </button>
      )}
    </div>
  );
}

export default AddFriendForm;

import React, { useState } from "react";
import "../Styles/GroupModal.css";

const GroupModal = ({ closeModal, addGroup }) => {
  const [groupName, setGroupName] = useState("");

  const handleAddGroup = () => {
    if (groupName.trim()) {
      addGroup(groupName);
      closeModal(); // Close the modal after adding the group
    }
  };

  return (
    <div className="kzui-modal-overlay">
      <div className="kzui-modal">
        <h3>Enter Group Name</h3>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Group Name"
          className="kzui-group-name-input"
        />
        <div className="kzui-modal-buttons">
          <button onClick={handleAddGroup} className="kzui-add-group-button">
            Add Group
          </button>
          <button onClick={closeModal} className="kzui-cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupModal;

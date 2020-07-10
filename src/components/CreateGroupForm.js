import React from 'react';

const CreateGroupForm = ({
                           editing,
                           newGroupName,
                           groupNameTaken,
                           toggleEditing,
                           updateNewGroupName,
                           createGroup
                         }) => (
  <div>
    <button onClick={toggleEditing}>
      {editing ? 'Cancel' : 'Create Group'}
    </button>
    {editing && (
      <form onSubmit={createGroup}>
        <input
          autoFocus
          type='text'
          onChange={updateNewGroupName}
          value={newGroupName}
        />
        <button
          type='submit'
          disabled={groupNameTaken || !newGroupName}
        >
          {groupNameTaken ? 'Group Name Taken' : 'Submit'}
        </button>
      </form>
    )}
  </div>
);

export default CreateGroupForm;
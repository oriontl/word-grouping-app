import React from 'react';
import Button from "./shared/Button";

const CreateGroupForm = ({
                           editing,
                           newGroupName,
                           groupNameTaken,
                           toggleEditing,
                           updateNewGroupName,
                           createGroup
                         }) => (
  <div className='mb-1 d-inline-flex align-items-center'>
    <Button onClick={toggleEditing} className='btn btn-outline-primary shadow-none'>
      {editing ? 'Cancel' : 'Create Group'}
    </Button>
    {editing && (
      <form onSubmit={createGroup} className='ml-2'>
        <input
          autoFocus
          type='text'
          onChange={updateNewGroupName}
          value={newGroupName}
          className='mr-2'
        />
        <Button
          type='submit'
          disabled={groupNameTaken || !newGroupName}
          className='btn btn-outline-success shadow-none'
        >
          {groupNameTaken ? 'Group Name Taken' : 'Submit'}
        </Button>
      </form>
    )}
  </div>
);

export default CreateGroupForm;
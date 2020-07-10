import React from 'react';
import Accordion from './Accordion';
import CreateGroupForm from './CreateGroupForm';

const PrefixAccordions = ({
                            prefixGroups,
                            handleGroupChange,
                            editing, newGroupName,
                            groupNameTaken,
                            toggleEditing,
                            updateNewGroupName,
                            createGroup
                          }) => {
  const groupOptions = Object.keys(prefixGroups);
  return (
    <div className='mt-4'>
      {prefixGroups && Object.keys(prefixGroups).length !== 0 && (
        <>
          <div className='d-inline-flex'>
            <h2 className='mr-4'>Prefix Groups</h2>
            <CreateGroupForm
              editing={editing}
              newGroupName={newGroupName}
              groupNameTaken={groupNameTaken}
              toggleEditing={toggleEditing}
              updateNewGroupName={updateNewGroupName}
              createGroup={createGroup}
            />
          </div>
        </>
      )}
      <div>
        {
          groupOptions.map(groupName =>
            <div key={groupName}>
              <Accordion
                groupName={groupName}
                groupItems={prefixGroups[groupName]}
                groupOptions={groupOptions}
                handleGroupChange={handleGroupChange}
              />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default PrefixAccordions;


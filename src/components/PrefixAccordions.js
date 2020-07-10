import React from 'react';
import Accordion from "./Accordion";

const PrefixAccordions = ({prefixGroups, handleGroupChange}) => {
  const groupOptions = Object.keys(prefixGroups);
  return (
    <div>
      {groupOptions.map((groupName) => (
        <Accordion
          groupName={groupName}
          groupItems={prefixGroups[groupName]}
          groupOptions={groupOptions}
          handleGroupChange={handleGroupChange}
        />
      ))}
    </div>
  );
};

export default PrefixAccordions;
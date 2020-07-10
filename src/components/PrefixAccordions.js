import React from 'react';
import Accordion from "./Accordion";

const PrefixAccordions = ({prefixGroups}) => {
  const groupOptions = Object.keys(prefixGroups);
  return (
    <div>
      {groupOptions.map((groupName) => (
        <Accordion groupName={groupName} groupItems={prefixGroups[groupName]}/>
      ))}
    </div>
  );
};

export default PrefixAccordions;
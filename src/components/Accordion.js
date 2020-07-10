import React, {Component} from 'react';
import AccordionRow from './AccordionRow';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggleOpen = () => {
    this.setState((prevState) => ({isOpen: !prevState.isOpen}));
  };

  render() {
    const {groupName, groupItems, groupOptions, handleGroupChange} = this.props;
    const {isOpen} = this.state;
    return (
      <div>
        <button onClick={this.toggleOpen}>{isOpen ? '-' : '+'} {groupName}</button>
        <div>
          {isOpen && (
            groupItems.map(item =>
              <AccordionRow
                key={item}
                item={item}
                parentGroup={groupName}
                groupOptions={groupOptions}
                handleGroupChange={handleGroupChange}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default Accordion;
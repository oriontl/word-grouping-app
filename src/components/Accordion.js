import React, {Component} from 'react';
import AccordionRow from './AccordionRow';
import UnstyledButton from './shared/UnstyledButton';

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
      <div className='mb-1'>
        <UnstyledButton
          onClick={this.toggleOpen}
          className='btn mb-3 shadow-none'
        >
          {isOpen ? '-' : '+'} {groupName}
        </UnstyledButton>
        <div className='ml-4'>
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
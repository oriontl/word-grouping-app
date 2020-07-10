import React, {Component} from 'react';
import Select from 'react-select';
import Button from "./shared/Button";

class AccordionRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  toggleEdit = () => {
    this.setState((prevState) => ({isEditing: !prevState.isEditing}));
  };

  onGroupSelect = (selection) => {
    const {item, parentGroup, handleGroupChange} = this.props;
    const newGroup = selection.value;
    if (newGroup !== parentGroup) {
      handleGroupChange(item, parentGroup, newGroup);
    }
    this.toggleEdit();
  };

  render() {
    const {isEditing} = this.state;
    const {item, parentGroup, groupOptions} = this.props;
    const defaultSelection = {label: parentGroup, value: parentGroup};
    return (
      <>
        <div className='d-flex align-items-center'>
          <div className='mr-2'>
            {item}
          </div>
          {
            isEditing ? (
              <Select
                defaultValue={defaultSelection}
                options={
                  groupOptions.map(groupOption => ({
                    label: groupOption,
                    value: groupOption
                  }))
                }
                onChange={this.onGroupSelect}
                className='flex-fill'
              />
            ) : (
              <Button onClick={this.toggleEdit} className='btn btn-sm btn-outline-secondary'>Change Group</Button>
            )
          }
        </div>
        <br/>
      </>
    );
  }
}

export default AccordionRow;
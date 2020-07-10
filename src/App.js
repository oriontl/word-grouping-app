import React, {Component} from 'react';
import InputCSV from './components/InputCSV';
import PrefixAccordions from './components/PrefixAccordions';
import {parseCSV} from './utils/parseUtils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: {},
      editing: false,
      newGroupName: '',
      groupNameTaken: false
    };
  }

  handleFileUpload = async (e) => {
    const f = e.target.files[0];
    try {
      const groups = await parseCSV(f);
      this.setState({groups});
    } catch (e) {
      console.warn(e.message);
    }
  };

  handleGroupChange = (word, oldGroup, newGroup) => {
    let {groups} = this.state;
    const idx = groups[oldGroup].findIndex(item => (item === word));
    delete groups[oldGroup][idx];
    groups[newGroup].push(word);
    this.setState({groups});
  };

  toggleEditing = () => {
    this.setState((prevState) => (
      {
        ...prevState,
        editing: !prevState.editing
      }
    ));
  };

  updateNewGroupName = (e) => {
    const {groups} = this.state;
    const newGroupName = e.target.value;
    const groupNameTaken = newGroupName in groups;
    this.setState((prevState) => (
      {
        ...prevState,
        newGroupName,
        groupNameTaken
      }
    ));
  };

  createGroup = () => {
    let {groups} = this.state;
    const {editing, newGroupName} = this.state;
    groups[newGroupName] = [];
    this.setState((prevState) => ({
      ...prevState,
      groups,
      editing: !editing,
      newGroupName: ''
    }));
  };

  render() {
    const {groups, editing, newGroupName, groupNameTaken} = this.state;
    return (
      <div className='container mt-3'>
        <h1>Word Grouping App</h1>
        <InputCSV handleFileUpload={this.handleFileUpload}/>
        <PrefixAccordions
          prefixGroups={groups}
          handleGroupChange={this.handleGroupChange}
          editing={editing}
          newGroupName={newGroupName}
          groupNameTaken={groupNameTaken}
          toggleEditing={this.toggleEditing}
          updateNewGroupName={this.updateNewGroupName}
          createGroup={this.createGroup}
        />
      </div>
    );
  }
}

export default App;

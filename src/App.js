import React, {Component} from 'react';
import {parseCSV} from "./utils/parseUtils";
import PrefixAccordions from "./components/PrefixAccordions";
import CreateGroupForm from "./components/CreateGroupForm";

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

  handleUpload = async (e) => {
    const f = e.target.files[0];
    const groups = await parseCSV(f);
    this.setState({groups});
  };

  handleGroupChange = (word, oldGroup, newGroup) => {
    let {groups} = this.state;
    const idx = groups[oldGroup].findIndex(w => (w === word));
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
      <div>
        <h1>Word Grouping App</h1>
        <input type='file' accept='.csv' onChange={this.handleUpload}/>
        <CreateGroupForm
          editing={editing}
          newGroupName={newGroupName}
          groupNameTaken={groupNameTaken}
          toggleEditing={this.toggleEditing}
          updateNewGroupName={this.updateNewGroupName}
          createGroup={this.createGroup}
        />
        <PrefixAccordions prefixGroups={groups} handleGroupChange={this.handleGroupChange}/>
      </div>
    );
  }
}

export default App;

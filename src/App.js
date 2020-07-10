import React, {Component} from 'react';
import {parseCSV} from "./utils/parseUtils";
import PrefixAccordions from "./components/PrefixAccordions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: {}
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

  render() {
    const {groups} = this.state;
    return (
      <div>
        <h1>Word Grouping App</h1>
        <input type='file' accept='.csv' onChange={this.handleUpload}/>
        <PrefixAccordions prefixGroups={groups} handleGroupChange={this.handleGroupChange}/>
      </div>
    );
  }
}

export default App;

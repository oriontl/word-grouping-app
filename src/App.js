import React, {Component} from 'react';
import {parseCSV} from "./utils/parseUtils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleUpload = (e) => {
    const f = e.target.files[0];
    parseCSV(f);
  };

  render() {
    return (
      <div>
        <h1>Word Grouping App</h1>
        <input type='file' accept='.csv' onChange={this.handleUpload}/>
      </div>
    );
  }
}

export default App;

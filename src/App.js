import React, {
  Component
} from 'react';

import AceEditor from 'react-ace';

import 'brace/mode/python';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import tools from 'brace/ext/language_tools';
import 'brace/snippets/python'

import pyPrompt from 'brace/ext/py-code';



class App extends Component {
  constructor(props) {
    super(props);
    this.addCom = this.addCom.bind(this);
  }

  addCom() {
    tools.addCompleter(pyPrompt);
  }


  render() {
    this.addCom();
    return (
      <div className="App">
        <AceEditor
          mode="python"
          theme="monokai"
          name="blah1"
          onLoad={this.onLoad}
          onChange={this.Change}
          showGutter={true}
          height="1200px"
          width="1900px"
          fontSize="15px"
          wrapEnabled= {true}
          enableLiveAutocompletion= {true}
          enableSnippets= {true}
        />
      </div>
    );
  }
}
export default App;
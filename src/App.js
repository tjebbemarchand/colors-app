import React, { Component } from 'react';
import Palette from './Pallete';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={seedColors[4]} />
      </div>
    );
  }
}

export default App;

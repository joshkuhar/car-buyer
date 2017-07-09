'use strict';

import React from 'react';

class Row extends React.Component {
  render() {
    return (
        <tr>
          <td >
            {this.props.amt}
          </td>
        </tr>
      )
  }
}

export default Row
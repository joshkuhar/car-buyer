'use strict';

import React from 'react';

class Row extends React.Component {
  render() {
    return (
        <tr>
          <td >
            Year {this.props.year}
          </td>
          <td >
            ${this.props.bought}.00
          </td>
          <td >
            ${this.props.saved}.00
          </td>
        </tr>
      )
  }
}

export default Row
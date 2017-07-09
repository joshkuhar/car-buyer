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
            {this.props.bought}
          </td>
          <td >
            {this.props.saved}
          </td>
        </tr>
      )
  }
}

export default Row
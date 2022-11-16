import React from 'react';
import content from '../mock/mock';
import Dropdown from './Dropdown';

class Region extends React.Component {
  render() {
    return (
      <div>
         <h1>COUNTRIES DROPDOWN</h1>
        <Dropdown  Content = {this.props.Content}/>
      </div>
    )
  }
}
Region.defaultProps ={
  Content: content
}
export default Region;
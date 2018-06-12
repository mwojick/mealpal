import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import TreatIndexItemContainer from
'../treat_listing/treat_index_item_container';

class TreatIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let { treats, shops, errors } = this.props;

    if (errors.length !== 0) {
      return <div className="treat-errors">
        <div>
          Sorry, no treats found.
          Please try the following:
          Zoom out the map
          Search for something else
          Change your filters
        </div>
        <div onClick={()=>this.props.changeFilter("center",true)}>
          Reset Map
        </div>
      </div>;
    }

    return (
      <div className="treat-listing">
        {treats.map( (treat) => {
          return <TreatIndexItemContainer key={treat.id}
            treat={treat} shop={shops[treat.shopId]}/>;
        })}
      </div>
    );
  }
}

export default TreatIndex;

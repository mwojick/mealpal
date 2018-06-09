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
    return (
      <div className="treat-listing">
        <li className="treat-errors">{errors}</li>
        {treats.map( (treat) => {
          return <TreatIndexItemContainer key={treat.id}
            treat={treat} shop={shops[treat.shopId]}/>;
        })}
      </div>
    );
  }
}

export default TreatIndex;

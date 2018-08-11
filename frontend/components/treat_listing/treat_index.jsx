import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import TreatIndexItemContainer from
  '../treat_listing/treat_index_item_container';

class TreatIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    // handles resetting filters when map is collapsed
    let coll = document.getElementById("collapsible-map");
    let map = document.getElementById("map");
    if (map.style.minWidth === "0px") {
      let myPromise = new Promise((resolve, reject) => {
        coll.click();
        setTimeout(() => {
          resolve();
        }, 300)
      });
      myPromise.then((success) => {
        this.props.resetFilter()
      });
    } else {
      this.props.resetFilter();
    }
  }

  render() {
    let { treats, shops, favorites, favIds } = this.props;

    if (treats.length === 0) {
      return <div className="treat-errors">
        <div className="treat-errors-text">
          <div className="treat-errors-sorry">
            Sorry, no treats found.
          </div>
          <div className="treat-errors-try">
            Please try the following:
          </div>
          <div className="treat-errors-list">
            <li>
              Zoom out the map
            </li>
            <li>
              Search for something else
            </li>
            <li>
              Change your filters
            </li>
          </div>
        </div>
        <button onClick={() => this.handleClick()}
          className="treat-errors-reset">
          RESET ALL!
        </button>
      </div>;
    }

    return (
      <div className="treat-listing">
        {treats.map((treat) => {
          return <TreatIndexItemContainer
            key={treat.id}
            treat={treat}
            shop={shops[treat.shopId]}
            favorite={favorites[treat.shopId]}
            favId={favIds[treat.shopId]} />;
        })}
      </div>
    );
  }
}

export default TreatIndex;

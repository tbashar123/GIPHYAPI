import React from 'react';

class GiftCard extends React.Component {

  render(){

    return(
      <div>
      <img src={this.props.image} alt="my awesome image"></img>
      </div>
    );
  }
}

export default GiftCard;

import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Card extends Component {
  render() {
    const { card, index } = this.props;
    return (
      <div>
        id: {index} - {card.cat} - {card.score}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)

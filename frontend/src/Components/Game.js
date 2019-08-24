import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';

export class Game extends Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    fetch('http://localhost:3101/questions')
      .then(res => res.json())
      .then(questions => this.setState({ questions }))
  }

  render() {
    return (
      <div>
        {/* {console.log(this.props.cards[0].cat)}
        {this.props.cards[0].cat} */}
        {this.props.cards.map((card, i) =>
          <Card card={card} index={i} key={i} />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards
})


export default connect(mapStateToProps)(Game)

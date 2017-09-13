import React from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
    RenderPlayers() {
        if (this.props.players.length === 0) {
            // return some jsx
            return (
                <div className="item">
                    <p className="item__message">Add your first player to get started</p>
                </div>
                );
            } else {
            return this.props.players.map((player) => {
        return <Player key={player._id} player={player}/>
        });
    }
}
  render() {
      return (
          <div>
            <FlipMove maintainContainerHeight={true}>
                {this.RenderPlayers()}
            </FlipMove>
          </div>
        );
    }  
};

PlayerList.propTypes = {
    players: React.PropTypes.array.isRequired
}
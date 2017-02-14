var React = require ("react");

var Song = require ("./song");

var ChartList = React.createClass({
  render: function(){
    var songNodes = this.props.songs.map(function(song, index){
      return (
          <Song key = {song.id.label}>
            <div className = "song">
            <img src = {song["im:image"][2].label}/>
              <div className = "detail">
                <p>No: {index + 1}</p>
                <p>Title: {song["im:name"].label}</p>
                <p>Artist: {song["im:artist"].label}</p>

              </div>
            </div>
          </Song>
        );
    });

    return(
      <div className = "chart-list">
      {songNodes}
      </div>
      );
  }
});

module.exports = ChartList;
var React = require("react");
var ChartList = require("./ChartList");

var ChartBox = React.createClass({
  getInitialState: function(){
    return {songs: []};
  },

  componentDidMount: function(){
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload= function(){
      if (request.status === 200){
        var data = JSON.parse(request.responseText);
        this.setState({songs: data.feed.entry});
        console.log("songs", this.state.songs);
      }
    }.bind(this);
    request.send();
  },

  render: function(){
    return (
      <div className = "chart-area">
      <h1>UK CHART</h1>
      <ChartList songs = {this.state.songs}/>
      </div>
      );
  }
});

module.exports = ChartBox;
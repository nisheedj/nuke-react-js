/** @jsx React.DOM */
var ColdFusionBodyRow = require('./ColdFusionBodyRow');

var ColdFusionBody = React.createClass({
  render: function() {
    var rows = [];
    for (var i = 0; i < this.props.data.length; i++) {
      rows.push(<ColdFusionBodyRow key={i} colData={this.props.data[i]} colDefs={this.props.colDefs}/>);
    };
    return (
      <section className="cold-fusion-body">
        {rows}
      </section>
    );
  }

});

module.exports = ColdFusionBody;
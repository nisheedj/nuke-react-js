/** @jsx React.DOM */
var ColdFusionHeadCol = require('./ColdFusionHeadCol');

var ColdFusionHeadRow = React.createClass({
  getDefaultProps: function() {
    return {
      colDefs:[]
    };
  },
  render: function() {
    var columns = [];
    for (var i = 0; i < this.props.colDefs.length; i++) {
      columns.push(<ColdFusionHeadCol key={i} {...this.props.colDefs[i]}/>);
    };
    return (
      <div className="cold-fusion-head-row">
        {columns}
      </div>
    );
  }

});

module.exports = ColdFusionHeadRow;
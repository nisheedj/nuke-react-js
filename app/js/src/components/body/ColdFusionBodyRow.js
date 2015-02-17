/** @jsx React.DOM */
var ColdFusionBodyCol = require('./ColdFusionBodyCol');

var ColdFusionBodyRow = React.createClass({
  render: function() {
    var colData = [];
    var cols = [];
    for (var i = 0; i < this.props.colDefs.length; i++) {
      _.each(this.props.colData, function(value, key) {
        if (key === this.props.colDefs[i].dataKey) {
          colData.push({
            colDef: this.props.colDefs[i],
            value: value
          });
        }
      }, this);
    };
  
    for (var i = 0; i < colData.length; i++) {
      cols.push(<ColdFusionBodyCol key={i} value={colData[i].value} {...colData[i].colDef}/>);
    };

    return (
      <div className="cold-fusion-body-row clearfix">
        {cols}
      </div>
    );
  }

});

module.exports = ColdFusionBodyRow;
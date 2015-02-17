/** @jsx React.DOM */
var ColdFusionHeadColTitle = require('./ColdFusionHeadColTitle');
var ColdFusionHeadColSort = require('./ColdFusionHeadColSort');

var ColdFusionHeadCol = React.createClass({
  getDefaultProps: function() {
    return {
      title: '',
      minWidth: 120,
      width:120,
      dataKey: '',
      sortable: false
    };
  },
  render: function() {
    var inlineStyles = {
      minWidth: this.props.minWidth + 'px',
      width:this.props.width + 'px'
    };
    return (
      <div className="cold-fusion-head-col" style={inlineStyles}>
        <div className="head-col-wrapper">
          <ColdFusionHeadColTitle title={this.props.title}/>
          <ColdFusionHeadColSort  sortable={this.props.sortable}/>
        </div> 
      </div>
    );
  }

});

module.exports = ColdFusionHeadCol;
/** @jsx React.DOM */
var ColdFusionHeadColTitle = React.createClass({

  render: function() {
    return (
      <span className="cold-fusion-head-col-title">{this.props.title}</span>
    );
  }

});

module.exports = ColdFusionHeadColTitle;
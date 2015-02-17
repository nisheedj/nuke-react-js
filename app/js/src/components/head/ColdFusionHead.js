/** @jsx React.DOM */
var ColdFusionHeadRow = require('./ColdFusionHeadRow');

var ColdFusionHead = React.createClass({

  getDefaultProps: function() {
    return {
      colDefs: []
    };
  },
  render: function() {
    return (
      <section className="cold-fusion-head">
        <ColdFusionHeadRow {...this.props}/>
      </section>
    );
  }

});

module.exports = ColdFusionHead;
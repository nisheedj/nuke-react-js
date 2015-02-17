/** @jsx React.DOM */
var ColdFusionHeadColSort = React.createClass({

  render: function() {
    var sortable;
    if(this.props.sortable === true){
      sortable = <div className="cold-fusion-head-col-sort">
        <button className="col-sort-asc">
          <span className="glyphicon glyphicon-triangle-top"></span>
        </button>
        <button className="col-sort-desc">
          <span className="glyphicon glyphicon-triangle-bottom"></span>
        </button>
      </div>
    } else{
      sortable = <span className="hidden">No Sort</span>
    }
    return (
      sortable
    );
  }

});

module.exports = ColdFusionHeadColSort;
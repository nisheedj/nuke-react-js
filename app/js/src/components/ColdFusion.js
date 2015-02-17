/** @jsx React.DOM */
var React = require('react/addons');
var _ = require('underscore');

var ColdFusionHead = require('./head/ColdFusionHead');  
var ColdFusionBody = require('./body/ColdFusionBody'); 

var ColdFusion = React.createClass({
  loadData:function(url){
    return $.get(url);
  },
  getInitialState: function() {
    return {
      colDefs: this.props.colDefs,
      data: this.props.data
    };
  },
  getDefaultProps: function() {
    return {
      colDefs: [],
      data: [],
      async: true,
      url:''
    };
  },
  componentDidMount: function() {
    if (this.props.async === true) {
      this.loadData(this.props.url).then(function(data) {
        this.setState({
          data: data
        });
      }.bind(this));
    }
  },
  render: function() {
    return (
      <div className="cold-fusion">
        <ColdFusionHead colDefs={this.state.colDefs}/>
        <ColdFusionBody {...this.state}/>
      </div>
    );
  }

});

module.exports = ColdFusion;
/** @jsx React.DOM */
var ColdFusionBodyCol = React.createClass({
  getInlineStyles: function() {
    var styles = {};
    styles['minWidth'] = this.props.minWidth + 'px';
    styles['width'] = this.props.width + 'px';
    styles['float'] = 'left';
    return styles;
  },
  getDefaultProps: function() {
    return {
      minWidth:120,
      width:120
    };
  },
  componentDidMount: function() {
    var self = this;
    $(this.getDOMNode()).resizable({
      handles: 'e',
       animateEasing: "easeOut",
      resize: function(e, ui) {
        $('.cold-fusion-body-col-'+ self.props.dataKey).width(ui.size.width);
      }
    });
  },
  render: function() {
    var inlineStyles = this.getInlineStyles();
    return (
      <div className={"cold-fusion-body-col cold-fusion-body-col-" + this.props.dataKey}style={inlineStyles}>{this.props.value}</div>
    );
  }

});

module.exports = ColdFusionBodyCol;
/**
 * Created by sirine on 30/03/16.
 */
var React = require('react');
var MUI = require('material-ui');
var List = MUI.List;
var ListItem = MUI.ListItem;
var MenuItem = MUI.MenuItem
var IconMenu = MUI.IconMenu;
var IconButton = MUI.IconButton;
var MyActions = require('../actions/MyActions');

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        style={{
    color: '#757575',
     fill: '#FF9800'


  }}
        tooltipPosition="bottom-left"
    >
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconStyle={{    color: '#757575',     fill: '#FF9800'}} iconButtonElement={iconButtonElement}>
        <MenuItem  >Add Terroir</MenuItem>
    </IconMenu>
);

var ListExample = React.createClass({
    addTerroir: function(e){
        MyActions.addTerroir( this.props.list[0]);
    },

    render: function() {
        var searchresult = this.props.list[0];
        if ((this.props.list).length < 1) {
            return null;
        }
        return (
    <div>
        <List style={{
    width: '50%',
  }}>
            <ListItem primaryText={searchresult} id={searchresult} onClick={this.addTerroir}rightIconButton={rightIconMenu}
            />

        </List>
    </div>)}
});



module.exports = ListExample;
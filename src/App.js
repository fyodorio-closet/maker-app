import React, { Component } from 'react';
import './App.css';
import TodoPage from './TodoPage/TodoPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isDrawerOpen: false};
  }
  openMenu = () => {
    this.setState({isDrawerOpen: !this.state.isDrawerOpen});
  }
  closeMenu = () => {
    this.setState({isDrawerOpen: false})
  }
  render () {
    return ( 
      <MuiThemeProvider>
        <AppBar
            title="maker"
            iconElementLeft={<IconButton onClick={this.openMenu}><i className="material-icons" style={{color: 'white'}}>menu</i></IconButton>}
            iconElementRight={
              <IconMenu
                iconButtonElement={<IconButton><i className="material-icons" style={{color: 'white'}}>more_vert</i></IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}>
                <MenuItem primaryText="Settings" />
              </IconMenu>
            }
          />
        <Drawer open={this.state.isDrawerOpen}
                docked={false}
                onRequestChange={(open) => this.setState({isDrawerOpen: open})}>
          <MenuItem onClick={this.closeMenu}>Home</MenuItem>
        </Drawer>
        <TodoPage />
      </MuiThemeProvider>
      // <div className='App'>
      //   <header className='App-header'>
      //     <h1 className='App-title'>maker</h1>
      //   </header>
      //   <p className='App-intro'>
      //     The best app for managing your tasks.
      //   </p>
      //   <TodoPage />
      // </div>
    )
  }
}

export default App

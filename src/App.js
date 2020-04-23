import React, { Fragment, Component } from 'react';
import Junda from './Junda'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'jiajun',
      lists: ['vue', 'react']
    }
  }
  render() {
    return (
      <Fragment>
        <div><input defaultValue={this.state.value} onChange={this.handleChange.bind(this)} />
          <button onClick={this.addServer.bind(this)}> 增加服务 </button></div>
        <ul>
          {
            this.state.lists.map((ele, index) => (<Junda content={ele} index={index} deleteItem={this.deleteServer.bind(this)}></Junda>))
          }
        </ul>
      </Fragment>
    )
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })

  }
  addServer(e) {
    this.setState({
      lists: [...this.state.lists, this.state.value]

    })
  }
  deleteServer(index) {
    let newLists = [...this.state.lists];
    newLists.splice(index, 1);
    this.setState({
      lists: newLists
    })


  }
}

export default App;

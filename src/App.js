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
  UNSAFE_componentWillMount() {
    console.log('组件即将挂载' + ' componentWillMount');
  }
  shouldComponentUpdate() {
    return true;
  }
  // shouldComponentUpdate() {
  //   return false;
  // }
  UNSAFE_componentWillUpdate() {
    console.log(`组件更新 componentWillUpdata`);
  }
  componentDidUpdate() {
    console.log(`组件更新 componentDidUpdata`);
  }
  render() {
    console.log('页面state,props发生变化时' + ' render');
    return (
      <Fragment>
        <div><input defaultValue={this.state.value} onChange={this.handleChange.bind(this)} />
          <button onClick={this.addServer.bind(this)}> 增加服务 </button></div>
        <ul ref={ul => this.ul = ul}>
          {
            this.state.lists.map((ele, index) => (<Junda content={ele} index={index} deleteItem={this.deleteServer.bind(this)}></Junda>))
          }
        </ul>
      </Fragment>
    )
  }
  componentDidMount() {
    console.log(`组件挂载完成 componentDidMount`);
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })

  }
  addServer(e) {
    this.setState({
      lists: [...this.state.lists, this.state.value]

    }, () => [...this.ul.querySelectorAll('li')].length
    )
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

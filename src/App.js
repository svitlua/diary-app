import React from 'react';
import AddNewItem from './components/AddNewItem.js'
import ItemList from './components/ItemList.js'
import ItemComments from './components/ItemComments.js'
import {Grid, Row, Col} from 'react-bootstrap';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      activeItem: 0,
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeActiveItem = this.changeActiveItem.bind(this);
    this.updateComments = this.updateComments.bind(this);
  }

  addItem(newitem){
    var updatedItems = this.state.items;
    newitem["comments"]=[];
    updatedItems.push(newitem);
    this.setState({items: updatedItems});
    localStorage.setItem('itemlist', JSON.stringify(updatedItems));
    // const cachedItems = localStorage.getItem('itemlist');
    // console.log(cachedItems);
    // let items = JSON.parse(cachedItems);
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
    this.setState({
      items: filteredItems,
      activeItem: 0,
    });
    localStorage.setItem('itemlist', JSON.stringify(filteredItems));
  }

  changeActiveItem(i){
    this.setState({activeItem: i});
  }

  updateComments(newcomment){
    let updatedItems = this.state.items;
    updatedItems[this.state.activeItem]["comments"].push(newcomment);
    this.setState({items: updatedItems});
    localStorage.setItem('itemlist', JSON.stringify(updatedItems));
  }

  renderComments(){
    let comments = [];
    //let activetitle = '';
    if (this.state.items.length>0){
      comments = this.state.items[this.state.activeItem]["comments"];
      //activetitle = this.state.items[this.state.activeItem]["text"];
      return <ItemComments comments={comments} activeitem={this.state.activeItem+1} addcomment={this.updateComments}/>;
    }
    else{
      return <div className="info__title">Nothing to comment</div>
    }
  }

  render(){

    return(
      <Grid fluid className="app">
        <Row>
            <Col xs={2} md={2} className="left-col">
              <div className="left-col__title">Diary App</div>
              <div className="left-col__description">Comment with no sense</div>
            </Col>
            <Col xs={5} md={5} className="info-col">
              <div className="info__title">Items</div>
              <AddNewItem updateList={this.addItem}/>
              <ItemList items={this.state.items} delete={this.deleteItem} changeactive={this.changeActiveItem} activeitem={this.state.activeItem}/>
            </Col>
            <Col xs={4} md={4} className="info-col">
            {this.renderComments()}
            </Col>
        </Row>
      </Grid>
    );

  }
}

export default App;

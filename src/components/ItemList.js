import React from 'react';
import {Button, Badge, ListGroup, ListGroupItem} from 'react-bootstrap';

class ItemList extends React.Component{


  deleteItem(key){
    this.props.delete(key);
  }

  changeActiveItem(i){
    this.props.changeactive(i);
  }

  render(){
    let items = this.props.items.map((item, i) =>
       {return <div>
                   <ListGroupItem key={item.key} className={`item ${this.props.activeitem===i ? 'item__active-item': ''}`} >
                            <div className="item__title" onClick={() => this.changeActiveItem(i)}>
                                {item.text}<Badge className="item__badge__green" >{item.comments.length}</Badge>
                            </div>
                          <Button className="item__btn" bsStyle="danger" onClick={()=> this.deleteItem(item.key)}>Delete</Button>
                    </ListGroupItem>
                    <hr className="item__hr"/>
                  </div>;})
    return(
      <div>
        <ListGroup>
          {items}
        </ListGroup>
        </div>
    );

  }
}

//
export default ItemList;

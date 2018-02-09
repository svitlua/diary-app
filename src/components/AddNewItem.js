import React from 'react';
import {Form, Button, FormControl} from 'react-bootstrap';

class AddNewItem extends React.Component{
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }


  addItem(event){
    event.preventDefault();
    let input = event.target.querySelector('input');
    let value = input.value;
    if (value.length > 0){
      input.value = '';
      let newitem = {
        text: value,
        key: Date.now()
      };
      this.props.updateList(newitem);
    }else{
      alert("Empty Input");
    }
  }

  render(){
    return(
      <div>
        <Form horizontal inline onSubmit = {this.addItem} className="input-item-form">
              <FormControl placeholder="Type name here..." className="input-item-form__input"/>
              <Button bsStyle="info" type="submit" className="input-item-form__btn">Add new</Button>
          </Form>
        </div>
    );

  }
}

export default AddNewItem;

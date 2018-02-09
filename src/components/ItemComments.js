import React from 'react';
import {FormGroup, FormControl, ListGroup, ListGroupItem} from 'react-bootstrap';

class ItemComments extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      newcomment: '',
    }
  }

  addComment(){
    if(this.state.newcomment.length > 0 && this.state.newcomment.trim()){
      this.props.addcomment(this.state.newcomment);
      this.setState({newcomment: ''});
    }else{
      alert("Empty Comment");
      this.setState({newcomment: ''});
    }
  }

  render(){
    let comments = '';
    if(this.props.comments.length>0){
      comments = this.props.comments.map((comment,i) =>
        {return <ListGroupItem className="comment-item" key={i}>
                     <div className={i%2===0? "comment-item__before__orange" : "comment-item__before__violet"}></div>
                     <div className="comment-item__text">{comment}</div>
                </ListGroupItem>;})
    }

    return(
      <div>
      <div className="info__title">Comments # {this.props.activeitem}</div>
        <ListGroup>
          {comments}
        </ListGroup>
        <FormGroup controlId="formControlsTextarea" className="newcomment-form">
        <div className="comment-item__before__gray"></div>
          <FormControl className="newcomment-form__input" componentClass="textarea"
              value={this.state.newcomment}
              onChange={ event=> this.setState({newcomment: event.target.value})}
              onKeyDown = {event => {
                if(event.ctrlKey && (event.keyCode === 13)){
                  this.addComment();
                }}
            }/>
        </FormGroup>
      </div>
    );

  }
}


export default ItemComments;

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class EditReview extends Component{
    constructor(props){
        super(props);
        this.state = {
            item: [],
        }
    }

    componentWillMount(){
        this.getReviews();
    }

    getReviews(){
        let reviewId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/Reviews/${reviewId}`)
        .then(response => {
            this.setState({item: response.data}, ()=>{
                console.log(this.state.item);
            })
        })
        .catch(err => console.log(err));
    }

    render(){
        return (
            <div><br />
                <Button 
                    variant="contained" 
                    size="small" 
                    color="default" 
                    component={Link} 
                    to='/'>
                    Back
                </Button>
                <h1>EditReview</h1>
            </div>
        )
    }
}

export default EditReview;
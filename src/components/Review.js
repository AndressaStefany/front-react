import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import '../App.css';

class Review extends Component{
    constructor(props){
        super(props);
        this.state = {
            item: props.item,
            key: props.key
        }
    }

    render(){
        return (
            <li>
                <div className='marginBottomTop2-percent'>
                    {this.state.item.date} | {this.state.item.coffeeShopId}
                    <br/>
                    {this.state.item.comments}
                    <br /><br />
                    {/* <Button 
                        variant="contained" 
                        size="small" 
                        color="primary" 
                        component={Link} 
                        to={`/reviews/${this.state.item.id}`}>
                        Edit
                    </Button> */}
                </div>
                <Divider variant="middle" />
             </li>
        )
    }
}

export default Review;
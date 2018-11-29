import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Review from './Review';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { getCookie } from './Auth/config';
import '../App.css';

class CoffeeShop extends Component{
    state = {
        reviews: [],
        logged: !!getCookie("token")
    }

    componentWillMount(){
        this.getReviews();
    }

    getReviews(){
        axios.get('http://localhost:3000/api/Reviews')
        .then(response => {
            this.setState({reviews: response.data}, ()=>{
            })
        })
        .catch(err => console.log(err));
    }

    render(){
        const reviewsItem = this.state.reviews.map((review, i)=> {
            return(
                <Review key={review.id} item={review} />
            )
        })
        return (
            <div>
                <h1>Reviews</h1>
                {this.state.logged && 
                    <Fab 
                        position="fixed" 
                        color="secondary" 
                        aria-label="Add" 
                        className='marginBottomTop2-percent'
                        component={Link} 
                        to={'/add'}>
                        <AddIcon />
                    </Fab>
                }
                <ul>{reviewsItem}</ul>
            </div>
        )
    }
}

export default CoffeeShop;
import React, {Component} from 'react'
import axios from 'axios'
import Divider from '@material-ui/core/Divider'

class CoffeeShop extends Component{
    constructor(){
        super();
        this.state = {
            reviews: []
        }
    }

    componentWillMount(){
        this.getCoffeShop();
    }

    getCoffeShop(){
        axios.get('http://localhost:3000/api/Reviews')
        .then(response => {
            this.setState({reviews: response.data}, ()=>{
                console.log(this.state);
                // console.log(new Intl.DateTimeFormat('en-GB').format(this.state.reviews.date));
            })
        })
    }

    render(){
        const reviewsItem = this.state.reviews.map((review, i)=> {
            return(
                <li>
                    <div className='marginBottomTop2-percent'>
                    {review.date} | {review.coffeeShopId}
                    <br/>
                    {review.comments}
                    </div>
                    <Divider variant="middle" />
                </li>
            )
        })
        return (
            <div>
                <h1>Coffee Shop</h1>
                <ul>{reviewsItem}</ul>
            </div>
        )
    }
}

export default CoffeeShop;
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { reviewsRoute, request, getCookie } from "./Auth/config";
import CustomizedSnackbars from './Messages';

const coffees = [
    {
      value: '1',
      label: 'Coffee 1',
    },
    {
      value: '2',
      label: 'Coffee 2',
    },
    {
      value: '3',
      label: 'Coffee 3',
    },
  ];

const ratings = [{value:'1',label: '1 - Ruim'},
                 {value:'2',label: '2 - Indiferente'},
                 {value:'3',label: '3 - Regular'},
                 {value:'4',label: '4 - Bom'},
                 {value:'5',label: '5 - Ótimo'}]

class AddReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: '',
            coffeShopId: '1',
            rating: '5',
            message: '',
        };    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();

        const { comments, coffeShopId, rating } = this.state;
        const publisherId = getCookie("userId");

        request.post(reviewsRoute, { comments, coffeShopId, rating, publisherId })
        .then(res => {
            this.setState({ 
                comments: '', 
                coffeShopId: '1',
                rating: '5',
                message: 'Review saved successfully!'});
        });
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

    render() {
        return (
        <div>
            <br />
            {!!this.state.message && <CustomizedSnackbars message={this.state.message} />}
            <h1>Add Review</h1>
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id="outlined-select-coffeShopId"
                    name="coffeShopId"
                    select
                    label="Select"
                    value={this.state.coffeShopId}
                    onChange={this.handleChange('coffeShopId')}
                    SelectProps={{}}
                    helperText="Please select the Coffee Shop"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                >
                    {coffees.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-comments-input"
                    label="comments"
                    type="text"
                    name="comments"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={this.state.comments}
                    onChange={this.handleChange('comments')}
                />
                <TextField
                    id="outlined-select-rating"
                    name="rating"
                    select
                    label="Select"
                    value={this.state.rating}
                    onChange={this.handleChange('rating')}
                    SelectProps={{                        
                    }}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                >
                    {ratings.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <Button 
                    type="submit"
                    variant="contained" 
                    color="primary"
                    value="Submit"
                >
                    Save
                </Button>
                <Button 
                    className='buttomBack'
                    variant="contained" 
                    color="default" 
                    component={ Link } 
                    to='/'>
                    Back
                </Button>
            </form>
        </div>
        );
    }
}

export default AddReview;
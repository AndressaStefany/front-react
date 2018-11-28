import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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

class AddReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            coffee: '1',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
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
            <h1>Add Review</h1>
            {/* <form onSubmit={this.onSubmit.bind(this)}> */}
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id="outlined-select-coffee"
                    name="coffee"
                    // inputRef="coffee"
                    select
                    label="Select"
                    value={this.state.coffee}
                    onChange={this.handleChange('coffee')}
                    SelectProps={{                        
                    }}
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
                    id="outlined-comment-input"
                    label="Comment"
                    type="text"
                    name="comment"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={this.state.comment}
                    onChange={this.handleChange('comment')}
                />
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
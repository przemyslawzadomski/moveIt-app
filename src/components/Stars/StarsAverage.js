import React, {Component} from 'react'
import StarRatings from 'react-star-ratings';
 
class StarsAverage extends Component {
  state = {
    average:'',
  }
    
    
 
    render() {
      return (
        <StarRatings
          starRatedColor="#f8c512"
          numberOfStars={5}
          name='rating'
          starDimension="35px"
          starSpacing="4px"
          rating={this.props.average}
        />
      );
    }
}

export default StarsAverage
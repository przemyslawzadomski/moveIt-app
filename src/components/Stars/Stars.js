import React, {Component} from 'react'
import StarRatings from 'react-star-ratings';

 
class Stars extends Component {
 
    
 
    render() {
      return (
        <StarRatings
          starRatedColor="#f8c512"
          numberOfStars={5}
          name='rating'
          starDimension="25px"
          starSpacing="5px"
          rating={this.props.rating}

        />
      );
    }
}

export default Stars
 
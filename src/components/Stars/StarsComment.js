import React, {Component} from 'react'
import StarRatings from 'react-star-ratings';

 
class StarsComment extends Component {
 
    
 
    render() {
      return (
        <StarRatings
          // starRatedColor="#fff"
          numberOfStars={5}
          name='rating'
          starDimension="25px"
          starSpacing="5px"
          rating={this.props.rating}
          changeRating={this.props.changeRating}
          starRatedColor="#000"
          starHoverColor="#000"
        />
      );
    }
}

export default StarsComment
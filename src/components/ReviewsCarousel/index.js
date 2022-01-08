// Write your code here
import {Component} from 'react'
import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class ReviewsCarousel extends Component {
  state = {reviewId: reviewsList[0].username}

  getNextReview = () => {
    const {reviewId} = this.state
    const presentIndex = reviewsList.findIndex(
      eachItem => eachItem.username === reviewId,
    )
    const nextIndex = presentIndex + 1

    return nextIndex
  }

  previousReview = () => {
    const {reviewId} = this.state
    const presentIndex = reviewsList.findIndex(
      eachItem => eachItem.username === reviewId,
    )
    const prevIndex = presentIndex - 1

    return prevIndex
  }

  onLeftArrowClick = () => {
    const prevIndex = this.previousReview()
    const startIndex = 0

    if (prevIndex !== startIndex - 1) {
      this.setState({reviewId: reviewsList[prevIndex].username})
    }
  }

  onRightArrowClick = () => {
    const nextIndex = this.getNextReview()
    const endIndex = reviewsList.length
    const {reviewId} = this.state
    if (nextIndex < endIndex - 1) {
      this.setState({reviewId: reviewsList[nextIndex].username})
    }
  }

  render() {
    const {reviewId} = this.state

    const presentIndex = reviewsList.findIndex(
      eachItem => eachItem.username === reviewId,
    )

    return (
      <div className="bg-container">
        <h1 className="header">Reviews</h1>
        <img
          src={reviewsList[presentIndex].imgUrl}
          alt={reviewsList[presentIndex].username}
          className="image"
        />
        <div className="arrows-container">
          <button className="button" type="button" testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              className="arrow"
              alt="left arrow"
              onClick={this.onLeftArrowClick}
            />
          </button>
          <p className="name">{reviewsList[presentIndex].username}</p>
          <button className="button" type="button" testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png  "
              className="arrow"
              alt="right arrow"
              onClick={this.onRightArrowClick}
            />
          </button>
        </div>
        <p className="company">{reviewsList[presentIndex].companyName}</p>
        <p className="review-text">{reviewsList[presentIndex].description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel

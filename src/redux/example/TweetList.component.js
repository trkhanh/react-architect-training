// This component doesn't depend on the Redux store for any state. It does map
// an action dispatcher function to its props though. We don't necessarily need to
// connect the dispatcher here. For example, if this component's parent is connecting
// functions to the dispatcher, the function could be declared there and passed into this
// component as a prop. The benefit would be that TweetList would no longer require
// Redux at all. The downside would be having too many dispatch functions declared
// in one component. Luckily, you get to implement your component using whichever
// approach you see fit.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';
import { removeTweetFromCollection } from '../actions';
const listStyle = {
    padding: '0'
};
const listItemStyle = {
    display: 'inline-block',
    listStyle: 'none'
};
class TweetList extends Component {
    getListOfTweetIds = () =>
        Object.keys(this.props.tweets);
    getTweetElement = (tweetId) => {
        const {
            tweets,
            onRemoveTweetFromCollection
        } = this.props;
        const tweet = tweets[tweetId];
        return (
            <li style={listItemStyle} key={tweet.id}>
                <Tweet
                    tweet={tweet}
                    onImageClick={onRemoveTweetFromCollection}
                />
            </li>
        );
    }
    render() {
        const tweetElements = this
            .getListOfTweetIds()
            .map(this.getTweetElement);
        return (
            <ul style={listStyle}>
                {tweetElements}
            </ul>
        );
    }
}
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    onRemoveTweetFromCollection: ({ id }) => {
        dispatch(removeTweetFromCollection(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TweetList);
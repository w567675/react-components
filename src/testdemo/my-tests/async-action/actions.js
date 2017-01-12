import fetch from 'isomorphic-fetch';

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit,
    };
}

export const INVALIIDATE_SUBREDDIT = 'INVALIIDATE_SUBREDDIT';
export function invalidateSubreddit(subreddit) {
    return {
        type: 'INVALIIDATE_SUBREDDIT',
        subreddit,
    };
}

export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit,
    };
}

export const RECEIVE_POSTS = 'RECIVE_POSTS';
export function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data,
        receivedAt: Date.now(),
    };
}

export function fetchPosts(subreddit) {
    return function (dispatch) {
        dispatch(requestPosts(subreddit));

        return fetch('http://127.0.0.1:3000')
            .then(res => res.json(), () => {
                console.log(222222222);
            })
            .then(json => {
                console.log(json);
                dispatch(receivePosts(subreddit, json));
            });
    };
}


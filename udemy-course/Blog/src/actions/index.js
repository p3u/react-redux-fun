import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/'
const API_KEY = '?key=c3f653fd-cd48-4468-a4a0-65093707b0a1'

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}


export const CREATE_POST = 'CREATE_POST';

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props)

  return {
    type: CREATE_POST,
    payload: request
  }
}

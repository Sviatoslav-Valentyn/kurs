import axios from "axios"

export const fetchPosts = async (query, searchType) => {
    const posts = await axios.get(`${process.env.REACT_APP_API_BASE_LINK}/2.3/search?order=desc&sort=relevance&${searchType === 'title' ? 'intitle' : 'tagged'}=${query}&site=stackoverflow`)
    return posts
}

export const fetchPost = async (id) => {
    const post = await axios.get(`${process.env.REACT_APP_API_BASE_LINK}/2.3/questions/${id}?order=desc&sort=activity&site=stackoverflow&filter=withbody`)
    return post
}

export const fetchPostAnswer = async (id) => {
    const postAnswers = await axios.get(`${process.env.REACT_APP_API_BASE_LINK}/2.3/questions/${id}/answers?order=desc&sort=votes&site=stackoverflow&filter=withbody`)
    return postAnswers
}

export const fetchUserPosts = async (id) => {
    const posts = await axios.get(`${process.env.REACT_APP_API_BASE_LINK}/2.3/users/${id}/questions?order=desc&sort=votes&site=stackoverflow`)
    return posts
}

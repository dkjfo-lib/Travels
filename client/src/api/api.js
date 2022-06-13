import axios from "axios";

const uri = "http://localhost:5000/api";

export const fetchPosts = () => axios.get(uri);

import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: "Bearer Ec_WSpf8QD0EVh_bQLHjmaSvWTHMCBWqS8YIp_1X6dgBuJ_GwVXQCAMqCniWbWkPJfk6rBe3H6NjnNtCgq3AiT0vf2WiLyHEy55ik3gXnO1pfkFDhS7INIhjHYSuXnYx"
    }
});


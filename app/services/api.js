import axios from 'axiosBasic';

export const getGithub = (username) =>
    axios.get(`
        https://api.github.com/users/${username}/repos?type=all&sort=updated?name='welcome'
    `);

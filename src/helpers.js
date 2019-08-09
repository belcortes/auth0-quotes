import axios from 'axios';

export const fetchData = () => {
  axios.get('https://auth0-exercise-quotes-api.herokuapp.com/api/quotes')
    .then(res => {
      this.setState({ quotes: res.data.results });
    });
}

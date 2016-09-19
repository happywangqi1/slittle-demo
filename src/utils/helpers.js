import axios from 'axios';
function searchGit (add) {
  let address = `https://api.github.com/users/${add}`
  return axios.get(address)
    .then((res) => (
      { getData:res.data  }
    ))
    .catch(function (error) {
      alert(error);
    });
  }



function getJson () {
  let address = `https://raw.githubusercontent.com/happywangqi1/domedata/master/card.json?${Math.random()}`
  return axios.get(address)
    .then((res) => (
      { getJson:res.data  }
    ))
    .catch(function (error) {
      alert(error);
    });
  }

  function getMd (add) {
    let address = `https://raw.githubusercontent.com/happywangqi1/domedata/master/blog/${add}.md`;
    return axios.get(address)
      .then((res) => (
        { getMd:res.data  }
      ))
      .catch(function (error) {
        alert(error);
      });
    }
export { searchGit,getJson,getMd}

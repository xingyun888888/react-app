import * as api from '../api'
import 'whatwg-fetch'
const wait = (wait) => {
  return {type: 'wait',wait,}
}
const checkAdmin = (check) => {
  return {type: 'admin',check}
}

export const admin = () => dispatch => {
  dispatch(wait('wait'))
  const url = api.check
  const option = {
    method: 'POST',
    mode:'cros',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }
  fetch(url, option)
    .then(response => response.json())
    .then(data => {
      dispatch(checkAdmin(data.code))
    })
    .catch(err => {
      console.log(JSON.stringify(err));
    })
}

export const handleType = (options) => {
  return {
    type: 'uploadType',
    options
  }
}

export const update = (update) => {
  return {
    type: 'updata',
    update
  }
}

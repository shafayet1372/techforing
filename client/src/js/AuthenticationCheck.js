const isLoggedIn = () => {
    let getAccessToken = JSON.parse(localStorage.getItem('access_token'))
    if (getAccessToken) {
        return true

    } else {

        return false
    }
}

export default isLoggedIn
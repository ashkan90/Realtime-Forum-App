import Token from './Token.js';
//import Form from './Form.js';
import AppStorage from './AppStorage.js';

class User {
	// methods
	login(data) {
		axios.post('/api/auth/login', data)
			.then(res => this.responseAfterLogin(res))
			.catch(err => console.log(err.response.data))
	}

	responseAfterLogin(res) {
		const access_token = res.data.access_token
		const username = res.data.user

		if (Token.isValid(access_token)) {
			AppStorage.store(access_token, username)
			window.location = "/forum"
		}
	}

	hasToken() {
		const storedToken = AppStorage.getToken()

		if (storedToken)
			return Token.isValid(storedToken) ? true : false
		return false
	}

	loggedIn() {
		return this.hasToken()
	}

	logout() {
		AppStorage.clear()
		window.location = "/forum"
	}

	name() {
		if (this.loggedIn()) 
			return AppStorage.getUser()
	}

	id() {
		if (this.loggedIn()) 
		{
			const payload = Token.payload(AppStorage.getToken())
			return payload.sub
		}
	}

	own(id) {
		return this.id() === id
	}

	admin() {
		return true
	}

	makeSlug(title) {
		return title.replace(/\s+/g, '-').toLowerCase()
	}
}

export default User = new User();
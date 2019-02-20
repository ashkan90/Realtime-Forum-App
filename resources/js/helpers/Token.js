class Token  {
	
	isValid(token) {
		const payload = this.payload(token)

		//console.log(payload)
		if(payload) {
			return payload.iss == 
			"http://127.0.0.1:8000/api/auth/login" || "http://127.0.0.1:8000/api/auth/signup" ?
			true : false
		}

		return false
	}

	payload(token) {
		const payload = token.split('.')[1]
		return this.decode(payload)
	}

	decode(payload) {
		return payload ? JSON.parse(atob(payload)) : null
	}
}

export default Token = new Token()
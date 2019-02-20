import Errors from './Errors.js';

class Form {
	constructor(data) {
		this.originalData = data;

		for(let field in data){
			this[field] = data[field]
		}

		this.errors = new Errors()
	}

	data() {
		let data = {}
		for(let property in this.originalData){
			data[property] = this[property]
		}

		return data
	}

	reset(){
		for(let field in this.originalData){
			this[field] = ''
		}
	}

	submit(requestType, url){
		return new Promise((resolve, reject) => {
			axios[requestType](url, this.data())
				.then(response => {
					this.onSuccess(response.data)
					resolve(response)
				})
				.catch(error => {
					if(error){
						this.onFail(error.response.data)
						if(error.response.status !== 422)
							reject(error.response)
					}
				})
		});
	}


	post(url){
		return this.submit('post', url)
	}

	get(url){
		return this.submit('get', url)
	}

	delete(url){
		return this.submit('delete', url)
	}

	patch(url){
		return this.submit('patch', url)
	}

	onSuccess(response){
		//console.log('success')
		//alert(response.data.message)
		this.originalData = response.data
		this.data()

		this.errors.clear()
		this.reset()
	}

	onFail(error){
		this.errors.record(error.errors)
	}
}

export default Form;
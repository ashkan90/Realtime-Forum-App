<template>
	<v-form @submit.prevent="signup" @keydown.enter="signup" >
	    <v-container @keydown="form.errors.clear($event.target.name)">
      		<v-layout row wrap>
      		  <v-flex xs12 sm6>
      		  	<v-text-field
      		  		name="name"
		            v-model="form.name"
		            label="Name"
		            type="text"
		            required
	          	></v-text-field>
	          	<span 
	          		v-if="form.errors.has('name')" 
	          		class="help is-danger" 
	          		v-text="form.errors.get('name')">
	          	</span>
      		  	<v-text-field
      		  		name="email"
		            v-model="form.email"
		            label="E-mail"
		            type="email"
		            required
	          	></v-text-field>
	          	<span 
	          		v-if="form.errors.has('email')" 
	          		class="help is-danger" 
	          		v-text="form.errors.get('email')">
	          	</span>

      		    <v-text-field
      		    	name="password"
		            v-model="form.password"
		            label="Password"
		            type="password"
		            required
	          	></v-text-field>
	          	<span 
	          		v-if="form.errors.has('password')" 
	          		class="help is-danger" 
	          		v-text="form.errors.get('password')">
	          	</span>
				<v-text-field
		            v-model="form.password_confirmation"
		            label="Password Confirmation"
		            type="password"
		            required
	          	></v-text-field>
	          	<span 
	          		v-if="form.errors.has('password_confirmation')" 
	          		class="help is-danger" 
	          		v-text="form.errors.get('password_confirmation')">
	          	</span>

	    		<v-btn :disabled="form.errors.any()" color="success" type="submit">Signup</v-btn>
	    		<v-btn to="/login" flat>Login</v-btn>
      		  </v-flex>
      		</v-layout>
	    </v-container>

  	</v-form>
</template>

<script>
export default {

	data() {
		return {
			form: new Form({
				name: null,
				email: null,
				password: null,
				password_confirmation: null,
			})
		}
	},

	created() {
		if(User.loggedIn())
			this.$router.push({ name: 'forum' })
	},

	methods: {
		/*signup() {
			axios.post('/api/auth/signup', this.form)
			.then(res => User.responseAfterLogin(res))
			.catch(err => this.errors = err.response.data.errors)
		}*/

		signup() {
			this.form.post('/api/auth/signup')
			.then(res => User.responseAfterLogin(res))
			.catch(err => this.form.onFail(err.response.data))
		}
	}

}
</script>
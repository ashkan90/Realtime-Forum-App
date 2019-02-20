<template>
	<v-form @submit.prevent="login" @keydown.enter="login">
	    <v-container>
      		<v-layout row wrap>
      		  <v-flex xs12 sm6>
      		  	<v-text-field
		            v-model="form.email"
		            label="E-mail"
		            type="email"
		            required
	          	></v-text-field>
      		    <v-text-field
		            v-model="form.password"
		            label="Password"
		            type="password"
		            required
	          	></v-text-field>

	    		<v-btn color="success" type="submit">Login</v-btn>
	    		<v-btn to="/signup" flat>Signup</v-btn>
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
				email: null,
				password: null,
			})
		}
	},
	created() {
		if(User.loggedIn())
			this.$router.push({ name: 'forum' })
	},
	methods: {
		login() {
			this.form.post('/api/auth/login')
			.then(response => {
				User.responseAfterLogin(response)
				User.dump(response)
			})
			.catch(error => this.onFail(error.response.data))
		}
	}
}
</script>
<template>
  <v-container>
	    <form @submit.prevent="ask">
		    <v-text-field
			  v-model="form.title"
		      label="Title"
		      required
		    ></v-text-field>
		    <v-autocomplete
				:items="categories"
				item-text="name"
				item-value="id"
				v-model="form.category_id"
				label="Category"
	      	></v-autocomplete>
		    <markdown-editor v-model="form.body"></markdown-editor>
		    <v-btn @click="ask">Ask a Question</v-btn>
	  </form>
  </v-container>
</template>

<script>
export default {
	data() {
		return {
			form: new Form({
				title: null,
				body: null,
				category_id: null,
				
			}),
			categories: [],
		}
	},
	created(){
		this.form.get('/api/category')
		.then(res => this.categories = res.data.data)
	},
	methods: {
		ask(){
			this.form.post('/api/question')
			.then(res => this.$router.push(res.data.path))
			.catch(err => this.form.onFail(err.response.data))
		}
	}
}
</script>
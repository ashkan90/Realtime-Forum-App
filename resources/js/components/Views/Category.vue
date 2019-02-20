<template>
	<v-container fluid>
	<v-layout row wrap>
	  <v-flex xs12 md12>
	    <v-card >
		  	<v-toolbar color="indigo" dark dense>
	          <v-toolbar-title>Categories</v-toolbar-title>          
	        </v-toolbar>

	        <v-list v-if="categories.length">
	        	<div v-for="(category, index) in categories"
		          	:key="category.id" >
		          <v-list-tile >
		          	<v-list-tile-action v-if="!slug">
		          	  <v-btn icon small>
		          	  	<v-icon color="indigo darken-3">edit</v-icon>
		          	  </v-btn>
		          	</v-list-tile-action>

		            <v-list-tile-content>
		            	<v-text-field
		            	  v-if="slug"
		            	  label="Name"
		            	  v-model="form.name"
		            	  @blur="slug = null"
		            	  @keydown.esc="slug = null"
		            	  @keydown.enter="update"
		            	></v-text-field>
		              <v-list-tile-title v-else v-text="category.name"></v-list-tile-title>
		            </v-list-tile-content>

		            <v-list-tile-action v-if="!slug">
		              <v-btn icon small @click="destroy(category.slug, index)">
		              	<v-icon color="grey darken-2">delete</v-icon>
		              </v-btn>
		            </v-list-tile-action>
		          </v-list-tile>
		          <v-divider></v-divider>
		      	</div>
	        </v-list>
		</v-card>
	  </v-flex>
	</v-layout>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			form: {name: null},
			categories: [],
			slug: null
		}
	},

	created() {
		if(!User.admin())
			this.$routes.push('/forum')
		axios.get(`/api/category`)
		.then(res => this.categories = res.data.data)
	},

	methods: {
		edit(index) {
			this.form.name = this.categories[index].name
			this.slug = this.categories[index].slug
			this.categories.splice(index, 1)
		},
		update(){
			axios.patch(`/api/category/${this.slug}`, this.form)
			.then(res => {
				this.categories.unshif(res.data)
				this.form.name = null
			})
		},
		destroy(slug, index) {
			axios.delete(`/api/category/${slug}`)
			.then(res => this.categories.splice(index, 1))
		}
	}
}
</script>
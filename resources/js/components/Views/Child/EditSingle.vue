<template>
  <v-container fluid>
  	<v-card class="pa-3">
	    <form @submit.prevent="update" >
		    <v-text-field
			  v-model="form.title"
		      label="Title"
		      required
		    ></v-text-field>
		    <markdown-editor v-model="form.body"></markdown-editor>
		    <v-card-actions>
		      <v-btn small @click="update" type="submit">
		      	<v-icon left color="teal">save</v-icon>Save
		      </v-btn>
		      <v-btn small @click="cancel">
		      	<v-icon left dark>cancel</v-icon>Cancel
		      </v-btn>
		    </v-card-actions>
	  	</form>
	</v-card>
  </v-container>
</template>

<script>
export default {
	props: ['data'],
	data() {
		return {
			form: {
				title: null,
				body: null
			}
		}
	},
	mounted() {
		this.form = this.data
	},

	methods: {
		cancel() {
			EventBus.$emit('cancelEditing')
		},
		update() {
			axios.patch(`/api/question/${this.form.slug}`, this.form)
			.then(res => this.cancel())
		}
	}
}
</script>
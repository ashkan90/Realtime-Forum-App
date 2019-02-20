<template>
	<v-container fluid v-if="data">
	  <v-card>
	    <v-card-title>
	      <div>
	      	<div class="headline">
	      		{{ data.title }}
	      	</div>
	      	<span class="grey--text">
	      		<b>{{ data.user }}</b> said {{ data.created_at }}
	      	</span>
	      </div>
	      <v-spacer></v-spacer>
	      <v-btn color="success" v-if="check()">{{ data.reply_count }} replies</v-btn>
	    </v-card-title>
		<v-card-text v-html="body" ></v-card-text>
		<v-card-actions v-if="own">
		  <v-btn icon small @click="edit">
		  	<v-icon color="purple darken-2">edit</v-icon>
		  </v-btn>
		  <v-btn icon small @click="destroy">
		  	<v-icon color="blue-grey darken-2">delete</v-icon>
		  </v-btn>
		</v-card-actions>
	  </v-card>
	</v-container>
</template>

<script>
export default {
	props: ['data'],
	data() {
		return {
			own: User.own(this.data.user_id),
		}
	},
	computed: {
		body() {
			return md.parse(this.data.body)
		}
	},
	methods: {
		destroy() {
			axios.delete(`/api/question/${this.data.slug}`)
			.then(res => this.$router.push('/forum'))
			.catch(err => console.log(err.response.data))
		},
		edit() {
			EventBus.$emit('startEditing')
		},
		check() {
			return this.data.reply_count > 0
		}
	}
}
</script>
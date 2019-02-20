<template>
	<div class="mt-2">
		<v-card>
		  <v-card-title>
		    <div class="headline"><b>{{ data.user }}</b></div>
		    <div class="ml-2">said {{ data.created_at }}</div>
		    
		    <v-spacer></v-spacer>

		    <v-menu bottom left v-if="own">
	            <v-btn
	              slot="activator"
	              icon
	            >
	              <v-icon>more_vert</v-icon>
	            </v-btn>

	            <v-list>
	              <v-list-tile
	                @click="">
	                <v-list-tile-title>Edit</v-list-tile-title>
	              </v-list-tile>
	              <v-list-tile
	                @click="destroy(data.id)">
	                <v-list-tile-title>Delete</v-list-tile-title>
	              </v-list-tile>
	            </v-list>
	          </v-menu>
		  </v-card-title>

		  <v-divider></v-divider>

		  <v-card-text v-html="data.reply"></v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	props: ['data', 'index'],
	computed: {
		own() {
			return User.own(this.data.user_id)
		}
	},
	methods: {
		destroy(){
			EventBus.$emit('deleteReply', this.index)
		}
	}
}
</script>
<template>
	<v-container v-if="question">
	  <reply 
	  v-for="(reply, index) in question.replies"
	  :key="reply.id"
	  :index="index"
	  :data="reply"></reply>
	</v-container>
</template>

<script>
import Reply from './Reply';
export default {
	props: ['question'],
	components: {
		Reply
	},
	created(){
		this.listen()
	},
	methods: {
		listen() {
			EventBus.$on('deleteReply', (index) => {
				axios.delete(`/api/question/${this.question.slug}/reply/${this.question.replies[index].id}`)
				.then(res => this.question.replies.splice(index, 1))
			})
		}
	}
}
</script>
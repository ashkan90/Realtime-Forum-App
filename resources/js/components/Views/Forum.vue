<!--<template>
	<v-container fluid gird-list-md v-if="questions.length">
	  <v-layout row wrap>
	    <v-flex md8>
	      <question
	      v-for="question in questions"
	      :key="question.id"
	      :data="question">
	      	
	      </question>
	    </v-flex>
	    <v-flex xs4>
	      <v-sidebar></v-sidebar>
	    </v-flex>
	  </v-layout>
	</v-container>
</template>
-->
<template>
	<v-container grid-list-md fluid v-if="questions.length">
	  <v-layout column wrap>
	    <v-flex md12>
	        <v-layout row wrap>
	          <v-flex md8>
	            <question
			      v-for="question in questions"
			      :key="question.id"
			      :data="question">
			      </question>
	          </v-flex>
	          <v-flex md4>
	            <v-sidebar></v-sidebar>
	          </v-flex>
	        </v-layout>
	    </v-flex>
	  </v-layout>
	</v-container>
</template>

<script>
import Question from './Child/Question'
import VSidebar from '../Sidebar'

export default {
	components: {
		Question,
		VSidebar,
	},
	data() {
		return {
			questions: new Form({})
		}
	},
	created() {
		this.questions.get('/api/question')
		.then(res => this.questions = res.data.data)
		.catch(err => console.log(err.response.data)/*this.question.onFail(err.response.data)*/)
	}
}
</script>
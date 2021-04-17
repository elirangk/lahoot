<template>
  <div>
    <h3>{{title}}</h3>
    <q-card>
      <q-card-section>
      <p>{{content}}</p>
      <q-btn>TRUE</q-btn>
      <q-btn>FALSE</q-btn>
      </q-card-section>
    </q-card><br>

    <q-card>
      <p>{{content}}</p>
      <q-card-section class="row">
      <q-btn>A. {{option.A}} </q-btn>
      <q-btn>B. {{option.B}} </q-btn>
      <q-btn>C. {{option.C}}</q-btn>
      <q-btn>D. {{option.D}}</q-btn>
      </q-card-section>
    </q-card>


  </div>
</template>

<script>
// import quizzConstructor from "@/views/quizzConstructor"

export default {
  name: "Quiz",
  data(){
    return {
      id:'',
      title:'Birthday of David',
      content:'How long are you?',
      option:{
        A:'25', B:'30', C:'45', D:'66'
      }
    }
  },
  created() {
    this.id = this.$route.params.id;
  }
}
</script>

<style scoped>
.q-card{
  margin-right:50px;
  margin-left:50px;
}

.q-btn{
  color:blue
}
</style>
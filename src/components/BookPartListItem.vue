<template>
  <div>
    <v-card color="accent" class="white--text">
      <v-card-title primary-title class="headline">{{ part.title }}</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="primary" :to="{name: 'bookPart', params: {bookId:book.id, partId:part.id}}">Открыть</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    'part': {
      type: Object,
      required: true
    },
    'bookId': {
      required: true
    }
  }
}
</script>

<style>

</style>
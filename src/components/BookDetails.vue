<template>
  <v-card color="info" class="white--text">
    <v-container fluid>
      <v-layout row class="hidden-sm-and-down">
        <v-flex xs4 md3>
          <v-img height="250" width="200" src="https://ef-tanya.ru/img/harrypotter/harry-preview.jpg"  class="mb-2">
          </v-img>
          <div class="text-center">
            <v-btn color="white" outlined>
              <v-icon left>visibility</v-icon>YouTube
            </v-btn>
          </div>
        </v-flex>
        <v-flex xs8 md9>
          <v-card-title>
            <div>
              <h3 class="headLine">{{ book.title }}</h3>
              <h4>{{ book.description }}</h4>
              <v-divider class="white"></v-divider>
              <div>Уровень: {{ getBookLevel(book.level)}}, {{ book.parts.length }} части</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-rating color="yellow" v-model="book.rating" readonly dense half-increments></v-rating>
            <div class="ml-1">
              <span>{{ book.rating }}</span>
              <span> ({{ book.ratingsCount }})</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn class="primary">Загрузить</v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
      <div class="hidden-md-and-up">
        <v-layout row>
          <v-flex xs4 md3>
            <v-img height="150" width="200" src="https://ef-tanya.ru/img/harrypotter/harry-preview.jpg"  class="mb-2">
            </v-img>
          </v-flex>
          <v-flex xs8 md9>
            <v-card-title>
              <div>
                <h3 class="headLine mb-3">{{ book.title }}</h3>
                <div class="text-center">
                  <v-btn color="white" outlined>
                    <v-icon left>visibility</v-icon>YouTube
                  </v-btn>
                </div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <h4>{{ book.description }}</h4>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <div>Уровень: {{ getBookLevel(book.level)}}, {{ book.parts.length }} части</div>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-card-actions>
              <v-rating color="yellow" v-model="book.rating" readonly dense half-increments></v-rating>
              <div class="ml-1">
                <span>{{ book.rating }}</span>
                <span> ({{ book.ratingsCount }})</span>
              </div>
              <v-spacer></v-spacer>
              <v-btn class="primary">Загрузить</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import * as bookHelper from '../helpers/book'

export default {
  props: {
    'book': {
      type: Object,
      required: true
    }
  },
  methods: {
    getBookLevel: bookHelper.getBookLevel
  }
}
</script>

<style>

</style>
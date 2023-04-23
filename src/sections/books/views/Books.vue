<script setup lang="ts">
import BookForm from '../components/BookForm.vue';
import { useBooks } from '../composables/use-books';

const { books, isLoading } = useBooks();
</script>

<template>
  <h1>Books</h1>

  <BookForm />

  <div v-if="isLoading">Loading...</div>

  <div v-for="book in books" :key="book.id">
    <img :src="book.coverImageUrl" :alt="`Cover of book ${book.title}`" height="100" />
    <h2>{{ book.title }}</h2>
    <p>{{ book.author }}</p>
    <p>{{ book.readingStatus }}</p>
  </div>
</template>

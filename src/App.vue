<script setup lang="ts">
import { useRepositoryContexts } from './core/composables/use-repository-contexts';

useRepositoryContexts();
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/books"> Books </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

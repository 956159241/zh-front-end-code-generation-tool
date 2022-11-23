<template>
    <el-button @click="() => router.push('/vue3')">vue3 界面设计</el-button>
</template>

<script setup lang="ts">
import { onBeforeRouteUpdate, useRouter } from 'vue-router';


const router = useRouter();

router.push('');
</script>
<template>
  <q-markup-table>
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.name" class="text-left">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows" :key="index">
        <td v-for="(column, index) in columns" :key="index">
          <slot :name="column.name" v-bind:row="row">
            {{ row[column.name] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </q-markup-table>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

interface Column {
  name: string;
  align: string | 'center';
  label: string;
  field: string;
  sortable: boolean | false;
}

defineProps<{
  rows: any;
  columns: Column[];
  rowKey?: string | 'name';
  noDatalabel?: string | "I didn't find anything for you";
}>();
const filter = ref('');
</script>

<template>
  <q-table
    :title="title"
    :rows="rows"
    :columns="columns"
    :row-key="rowKey"
    :no-data-label="noDatalabel"
  >
    <template v-slot:top-right>
      <q-input
        borderless
        dense
        debounce="300"
        v-model="filter"
        placeholder="Search"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td v-for="column in columns" :key="column.name" :props="props">
          <slot :name="column.name" v-bind:row="props.row">
            {{ props.row[column.name] }}
          </slot>
        </q-td>
      </q-tr>
    </template>
  </q-table>
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
  title?: string | '';
  rows: any;
  columns: Column[];
  rowKey?: string | 'name';
  noDatalabel?: string | "I didn't find anything for you";
}>();
const filter = ref('');
</script>

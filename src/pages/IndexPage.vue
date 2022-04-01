<template>
  <div class="row q-pa-md">
    <div class="col-12">
      <TableList title="Companies" :columns="companyColumns" :rows="companies">
        <template v-slot:action>
          <q-btn flat color="primary" label="View Details" />
        </template>
      </TableList>
    </div>
  </div>
  <div class="row q-pa-md">
    <div class="col-4">
      <div class="row">
        <h6>Overall ETL Monitored</h6>
      </div>
    </div>
    <div class="col-8">
      <TableList
        title="Companies"
        :columns="latestEtlColumns"
        :rows="latestEtls"
      >
        <template v-slot:company="{ row }">
          {{ row.company.name }}
        </template>
        <template v-slot:action>
          <q-btn flat color="primary" label="View Details" />
        </template>
      </TableList>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import Company from '../models/company.interface';
import LatestEtl from '../models/latest-etl.interface';
import TableList from 'src/components/TableList.vue';

const companyColumns = [
  {
    name: 'id',
    align: 'center',
    label: 'ID',
    field: 'id',
    sortable: true,
  },
  {
    name: 'name',
    align: 'center',
    label: 'Name',
    field: 'name',
    sortable: true,
  },
  {
    name: 'code',
    align: 'center',
    label: 'Code',
    field: 'code',
    sortable: true,
  },
  {
    name: 'action',
    align: 'center',
    label: '',
    field: 'action',
  },
];
const companies = reactive<Company[]>([
  {
    id: 1,
    name: 'DevTest',
    code: 'R00',
  },
  {
    id: 2,
    name: 'Garmin',
    code: '200',
  },
  {
    id: 3,
    name: 'Symantec',
    code: '400',
  },
]);

const latestEtlColumns = [
  {
    name: 'id',
    align: 'center',
    label: 'ID',
    field: 'id',
    sortable: true,
  },
  {
    name: 'company',
    align: 'center',
    label: 'Company',
    field: 'company',
    sortable: true,
  },
  {
    name: 'status',
    align: 'center',
    label: 'Status',
    field: 'status',
    sortable: true,
  },
  {
    name: 'dateTimeRequested',
    align: 'center',
    label: 'Date Time Requested',
    field: 'dateTimeRequested',
    sortable: true,
  },
];

const latestEtls = reactive<LatestEtl[]>([
  {
    id: 1,
    company: {
      id: 1,
      name: 'DevTest',
      code: 'R00',
    },
    status: 'Ongoing',
    dateTimeRequested: '03/17/2020 15:12',
  },
  {
    id: 2,
    company: {
      id: 2,
      name: 'Garmin',
      code: '200',
    },
    status: 'Done',
    dateTimeRequested: '03/17/2020 15:12',
  },
  {
    id: 3,
    company: {
      id: 3,
      name: 'Symantec',
      code: '400',
    },
    status: 'Done',
    dateTimeRequested: '03/17/2020 15:12',
  },
  {
    id: 4,
    company: {
      id: 3,
      name: 'Symantec',
      code: '400',
    },
    status: 'Done',
    dateTimeRequested: '03/17/2020 15:12',
  },
]);

const filter = ref('');
</script>

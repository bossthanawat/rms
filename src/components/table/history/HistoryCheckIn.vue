<template>
  <v-container id="history" fluid tag="section">
    <v-data-table dense :headers="headers" :items="getData" :loading="loading">
      <template v-slot:[`item.time_work`]="{ item }">
        {{ $utility.convertTimeWorkToFormatHours(item.time_work) }}
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import HistoryMixin from "./mixins/index";

@Component
export default class HistoryCheckIn extends Mixins(HistoryMixin) {
  private headers: Array<object> = [
    {
      sortable: false,
      text: "Check In",
      value: "date_start"
    },
    {
      sortable: false,
      text: "Check Out",
      value: "date_end"
    },
    {
      sortable: false,
      text: "Work hours",
      value: "time_work",
      align: "right"
    }
  ];
}
</script>

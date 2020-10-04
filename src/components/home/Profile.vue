<template>
  <v-container id="profile" fluid tag="section">
    <v-row>
      <v-col cols="12" sm="6" lg="6" xl="6">
        <base-material-stats-card
          color="info"
          icon="mdi-clock-time-four"
          title="Start Time"
          :value="data.dateStart"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="6" xl="6">
        <base-material-stats-card
          color="primary"
          icon="mdi-run"
          title="Working Time % (Per 8 hours)"
          :value="getPercentTimeWork + '%'"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" lg="6" xl="6">
        <base-material-card color="teal darken-1" title="Map Last CheckIn">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Map</div>
            <div class="subtitle-1 font-weight-light">Last CheckIn</div>
          </template>
          <v-card-text>
            <v-sheet>
              <Map :location="locationMap" />
            </v-sheet>
          </v-card-text>
        </base-material-card>
      </v-col>
      <v-col cols="12" sm="6" lg="6" xl="6">
        <base-material-card color="teal darken-1" title="History CheckIn">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">History</div>
            <div class="subtitle-1 font-weight-light">Last CheckIn</div>
          </template>
          <v-card-text>
            <v-sheet>
              <HistoryCheckIn></HistoryCheckIn>
            </v-sheet>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { ILoadcurrent, ILonLat } from "@/_service/models";
import Map from "@/components/Map.vue";
import HistoryCheckIn from "@/components/table/history/HistoryCheckIn.vue";
const profile = namespace("profile");

@Component({
  components: {
    Map,
    HistoryCheckIn
  }
})
export default class Profile extends Vue {
  @profile.State
  public data?: ILoadcurrent;
  @profile.Getter
  public getPercentTimeWork?: number;
  @profile.Getter
  public getCheckInLocation!: ILonLat;

  get locationMap(): object {
    return {
      lon: this.getCheckInLocation?.lon,
      lat: this.getCheckInLocation?.lat
    };
  }
}
</script>

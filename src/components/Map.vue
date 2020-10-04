<template>
  <longdo-map
    v-if="marker.location.lon && marker.location.lat"
    :last-view="false"
    :location="marker.location"
    :zoom="10"
  >
    <longdo-map-marker :location="marker.location" :title="title" :detail="detail" />
  </longdo-map>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ILonLat } from "@/_service/models";
import { LongdoMap, LongdoMapMarker } from "longdo-map-vue";
LongdoMap.init(process.env.VUE_APP_LONGDOMAP_KEY);

@Component({
  components: {
    LongdoMap,
    LongdoMapMarker
  }
})
export default class Map extends Vue {

  get marker(): object {
    return {
      location: {
        lon: +this.location?.lon,
        lat: +this.location?.lat
      }
    };
  }

  @Prop({ required: true, type: Object })
  readonly location!: ILonLat;

  @Prop({ required: false, type: String, default: "Location" })
  readonly title!: string;

  @Prop({ required: false, type: String, default: "check in" })
  readonly detail!: string;
}
</script>

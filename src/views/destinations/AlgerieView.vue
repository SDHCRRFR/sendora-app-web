<template>
  <DestinationLanding :dest="dest" />
</template>

<script lang="ts" setup>
import DestinationLanding from '@/components/DestinationLanding.vue'
import { getDestination } from '@/data/destinations'

const dest = getDestination('algerie')!
</script>

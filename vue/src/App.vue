<template>

  <div class="p-4 d-flex flex-column space-y-4">
    <Timeline :listStep="steps" variant="v1"/>


    <div class="black text-alpha text-primary italic font-normal border border-1">Text Alpha</div>
    <div class="text-beta border border-1">TEST122</div>
    <div class="text-gamma border border-1">TEST122</div>
    <div class="text-sigma border border-1">Last updated on 10/01/2024, 10.00 AM</div>
    <div class="border border-1">Lihat Baris</div>
    <div class="text-omicron border bg-black-10 border border-1 p-4 w-[10rem]" :style="{ height: '20rem' }">Lihat Baris
    </div>
    <button class="font-bold w-auto px-4 py-2 bg-primary text-white border-primary rounded-md ">
      SISKA APRIANA
    </button>
    <span class="bg-primary-10 text-primary  font-bold py-1 px-3 w-fit rounded-md">Sudah Sesuai
      SLA</span>
    <span class="bg-danger-10 text-danger  font-bold py-1 px-3 w-fit rounded-md">Sudah Sesuai
      SLA</span>
    <span class="bg-secondary-10 text-secondary  font-bold py-1 px-3 w-fit rounded-md">Sudah Sesuai
      SLA</span>
  </div>



  <div class="grid grid-cols-3 border border-1 w-full">
    <div class=" border">
      SISKA APRIANA
    </div>
    <div class=" border">
      SISKA TEST 123
    </div>
  </div>
</template>

<script setup lang="ts">
import Timeline from './components/timeline.vue'

const steps= [
  { title: "Step 1", subtitle: "January 2023", description: "Started the project." },
  { title: "Step 2", subtitle: "March 2023", description: "Completed phase one." },
  { title: "Step 3", subtitle: "June 2023", description: "Launched beta version." },
]
</script>

<style scoped></style>
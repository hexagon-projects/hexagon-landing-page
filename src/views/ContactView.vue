<script setup>
import Cta from '@/components/pages/home/cta.vue';
import Hero from '@/components/pages/contact/Hero.vue';
import OurOffices from '@/components/pages/contact/OurOffices.vue';
import ListContact from '@/components/pages/contact/ListContact.vue';
import Map from '@/components/pages/contact/GMap.vue';
import AnyProjIdea from '@/components/pages/contact/AnyProjIdea.vue';

</script>

<template>
    <div class="space-y-12">
        <Hero />
        <ListContact />
        <OurOffices />
        <Map />
        <AnyProjIdea />
        <Cta />
    </div>
</template>

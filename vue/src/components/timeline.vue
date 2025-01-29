<template>
    <div v-for="(step,i) in listStep" class="d-flex gap-4">
        <div class='gap-2  flex-shrink-0'>
            <p class='text-omega'>12 Oktober 2021, 13:20 WIB</p>
            <span class="bg-primary-10 text-primary font-bold px-3 py-1 rounded-md">Sudah Sesuai SLA</span>
        </div>
        <div class="align-content-stretch position-relative border-dashed border-black-50 border-1" :style="{width:'1px'}">
            <div class="bg-white p-1  position-absolute translate-middle-x rounded-full" :style="{top:'-5%'}">
                <div class=" rounded-full border-primary border border-4 " :style="{width:'0.875rem', height:'0.875rem'}"></div>
            </div>
        </div>
        <div :style="{width:'20rem'}">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        </div>
    </div>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'v1'
        },
        listStep: {
            type: Array,
            required: true
        }
    },
    methods: {
        getHiddenClass(i, position) {
            if (this.variant === 'v1') {
                return (i % 2 === 0 && position === 'right') || (i % 2 !== 0 && position === 'left') ? 'd-md-none' : '';
            }
            return '';
        }
    }
};
</script>

<style lang="scss">
.timeline-container {
    width: fit-content;

    .timeline-line {
        width: 2px;
        height: 100%;
        background: #dee2e6;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .timeline-icon {
        width: 30px;
        height: 30px;
        background: #0d6efd;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);
    }

    .content {
        width: 15rem;
    }
}
</style>
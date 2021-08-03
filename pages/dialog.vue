<template >
    <v-card>
        <v-card-text>
            <pre>Selected date: {{ date || 'Please select a date form the datepicker, below.'}}</pre>
            <v-layout>
                <v-flex offset-xs3 xs6>
                    <s-date-picker 
                        v-model="date" 
                        :outline="false"
                        clearable
                    />
                </v-flex>
            </v-layout>
        </v-card-text>
    </v-card>  
</template>

<script>
// import SDatePicker from '@/components/s-date-picker.vue'
//             // <component :is="require('./components/s-date-picker.vue')" />

// export default {
//   components: {
//       SDatePicker
//   },

//   data() {
//       return {
//           date: null
//       }
//   }
// }
</script>

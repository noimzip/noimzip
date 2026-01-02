import { createApp } from 'vue'
import './style.css'
import header from './header.vue'
import home from './home.vue'
import gallery from './gallery.vue'
import profile from './profile.vue'
import footer from './footer.vue'


createApp(header).mount('#header')
createApp(home).mount('#home')
createApp(gallery).mount('#gallery')
createApp(profile).mount('#profile')
createApp(footer).mount('#footer')
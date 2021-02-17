<template>
  <div id="modal">
    <button @click="handleModal(true)">
      <slot name="button"></slot>
    </button>

    <transition name="fade">
    <div v-if="openModal">
      <div class="modalMask">
        <div class="modalWrapper">          
          <div class="modalContainer">          

            <div class="modalHeader">
              <slot name="header"></slot>
              <button
                    class="modalButton"
                    @click="handleModal(false)">
                    X
              </button>
            </div>

            <div class="modalBody">
              <slot name="body"></slot>
            </div>

            <div class="modalFooter">
              <slot name="footer"></slot>
            </div>
            
          </div>
        </div>
      </div>
    </div>
</transition>
  </div>
  
</template>

<script>
import $Store from '../../../store/index';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    handleModal(val) {
      if (val === true) {
        $Store.dispatch('handleModal', true);
      } else {
        $Store.dispatch('handleModal', false);
      }
    },
  },
  computed: {
    ...mapGetters(['openModal']),
  },
};
</script>

<style scoped src="./Modal.css"></style>

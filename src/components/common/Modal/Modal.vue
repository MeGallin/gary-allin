<template>
  <div id="modal">
    <button @click="handleModal(true)">Open Modal</button>

    <div v-if="openModal">
      <div class="modalMask" transition="modal">
        <div class="modalWrapper">
          <div class="modalContainer">
            <div class="modalHeader">
              <slot name="header">default header</slot>
            </div>

            <div class="modalBody">
              <slot name="body">default body</slot>
            </div>

            <div class="modalFooter">
              <slot name="footer">
                <button
                  class="modalButton"
                  @click="handleModal(false)"
                >
                  X
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
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

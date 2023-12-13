<script>
import { store } from '../store';
export default {
  name: 'AppSearch',
  data() {
    return {
      store,
    };
  },
  methods: {
    // testEvent() {
    //   console.log('ciao sono stato submittato');
    // },
  },
};
</script>
<template>
  <div class="container">
    <form
      class="row gy-2 gx-3 align-items-center justify-content-center"
      @submit.prevent="$emit('pippo')"
    >
      <div class="col-auto">
        <label class="visually-hidden" for="search-character"
          >Search Character</label
        >
        <input
          type="text"
          class="form-control"
          id="search-character"
          placeholder="Search Character"
          v-model="store.searchKey"
        />
      </div>

      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingSelect">Preference</label>
        <select
          class="form-select"
          id="autoSizingSelect"
          v-model="store.searchStatus"
        >
          <option selected value="">Select Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div class="col-auto">
        <button type="submit" class="btn btn-primary">Search</button>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-warning">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AppSearch',
};
</script>
<template>
  <div class="container">
    <form class="row gy-2 gx-3 align-items-center justify-content-center">
      <div class="col-auto">
        <label class="visually-hidden" for="search-character"
          >Search Character</label
        >
        <input
          type="text"
          class="form-control"
          id="search-character"
          placeholder="Search Character"
        />
      </div>

      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingSelect">Preference</label>
        <select class="form-select" id="autoSizingSelect">
          <option selected>Select Status</option>
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
<style></style>

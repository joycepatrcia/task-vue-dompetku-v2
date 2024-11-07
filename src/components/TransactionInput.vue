<template>
  <div>
    <h4>My Wallet Diary</h4>
    <form @submit.prevent="submitTransaction" style="width: 50%;">
      <div class="form-row" style="display: flex; align-items: center; justify-content: space-between;">
        <div class="form-group" style="flex: 1; margin-right: 5px;" id="category">
          <b-form-select v-model="transaction.category" size="sm">
            <option disabled value="">Category</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </b-form-select>
        </div>

        <div class="form-group" style="flex: 1; margin-right: 5px;">
          <b-form-input v-model="transaction.amount" type="number" placeholder="Nominal" size="sm" required></b-form-input>
        </div>

        <div class="form-group" style="flex: 1; margin-right: 5px;">
          <b-form-select v-model="transaction.type" required size="sm">
            <option disabled value="">Type</option>
            <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
          </b-form-select>
        </div>

        <div class="form-group" style="margin-left: 25px;">
          <b-button style="width: auto;" type="submit" variant="success">Submit</b-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transaction: {
        category: '',
        amount: '',
        type: ''
      },
      categories: ['Salary', 'Transportation', 'Shopping', 'Entertainment', 'Food', 'Others'],
      types: ['Income', 'Expense']
    };
  },
  methods: {
    submitTransaction() {
      const transaction = {
        category: this.transaction.category,
        amount: parseFloat(this.transaction.amount),
        type: this.transaction.type,
      };
      this.$emit('addTransaction', transaction);

      this.transaction.category = '';
      this.transaction.amount = '';
      this.transaction.type = '';
    }
  }
};
</script>

<style scoped>
form {
  margin-left: 25%;
}

input, select {
  margin: 5px;
  padding: 8px;
}

select {
  color: #333; /* Darker text color for visibility */
  background-color: #fff; /* White background */
}

option {
  color: #333; /* Ensure options are visible */
  background-color: #fff; /* White background */
}
</style>

<template>
  <div>
    <h3>Tambah Transaksi</h3>
    <form @submit.prevent="submitTransaction" style="margin-left: 3%;">
      <input v-model="keterangan" type="text" placeholder="Keterangan" required />
      <input v-model="amount" type="number" placeholder="Jumlah Uang" required />
      
      <select v-model="type" required>
        <option value="income">Uang Masuk</option>
        <option value="expense">Uang Keluar</option>
      </select>
      
      <b-button style="margin-left: 2%;" type="submit" variant="success">Submit</b-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keterangan: '',
      amount: 0,
      type: 'income', // default ke uang masuk
    };
  },
  methods: {
    submitTransaction() {
      // Emit data ke parent untuk menambah transaksi
      const transaction = {
        keterangan: this.keterangan,
        amount: parseFloat(this.amount),
        type: this.type,
      };
      this.$emit('addTransaction', transaction);
      
      // Reset form setelah submit
      this.keterangan = '';
      this.amount = 0;
      this.type = 'income';
    }
  }
};
</script>

<style scoped>
/* Styling untuk form input */
form {
  margin: 20px 0;
}

input, select {
  margin: 5px;
  padding: 8px;
}
</style>

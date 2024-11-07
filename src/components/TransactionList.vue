<template>
  <div style="margin-top: 5%;">
    <h4>Daftar Transaksi</h4>
    <center>
    <table class="table table-striped" style="width: 50%;">
      <thead style="align-items: center; text-align: center;">
        <tr>
          <th>Keterangan</th>
          <th>Jumlah Uang</th>
          <th></th>
        </tr>
      </thead>
      <tbody style="align-items: center; text-align: center;">
        <tr v-for="(transaction, index) in transactions" :key="index">
          <td>{{ transaction.keterangan }}</td>
          <td>Rp {{ transaction.amount }}</td>
          <td>
            <b-button @click="deleteTransaction(index)" variant="danger">Hapus</b-button>
          </td>
        </tr>
      </tbody>
    </table>
    </center>
    <div class="d-flex justify-content-start mt-3" style="margin-left: 25%;">
      <b-button v-if="transactions.length > 0" @click="clearAll" variant="danger">Hapus Semua Data</b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['transactions'],
  methods: {
    deleteTransaction(index) {
      // Emit event untuk menghapus transaksi
      this.$emit('deleteTransaction', index);
    },
    clearAll() {
      // Emit event untuk menghapus semua transaksi
      this.$emit('clearAll');
    }
  }
};
</script>

<style scoped>
/* Styling tabel */
table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

button {
  margin: 0;
}
</style>

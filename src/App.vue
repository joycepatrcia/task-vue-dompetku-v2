<template>
  <div id="app">
    <center><h2 style="margin-bottom: 5%;">Dompetku - Expense & Income Money Management</h2></center>
    
    <!-- Input Transaksi -->
    <transaction-input @addTransaction="addTransaction" />

    <!-- Daftar Transaksi -->
    <transaction-list 
      :transactions="transactions" 
      @deleteTransaction="deleteTransaction"
      @deleteAllTransactions="deleteAllTransactions"
    />
        
    <!-- Tampilkan Saldo -->
    <h5>Total Saldo: Rp {{ saldo }}</h5>

  </div>
</template>

<script>
import TransactionInput from './components/TransactionInput.vue';
import TransactionList from './components/TransactionList.vue';

export default {
  name: 'App',
  components: {
    TransactionInput,
    TransactionList
  },
  data() {
    return {
      transactions: [],  
      saldo: 0,  
    };
  },
  methods: {
    addTransaction(transaction) {
      this.transactions.push(transaction);
      this.updateSaldo();
    },

    deleteTransaction(index) {
      this.transactions.splice(index, 1);
      this.updateSaldo();
    },
    deleteAllTransactions() {
      // Hapus semua transaksi
      this.transactions = [];
    },
    updateSaldo() {
      let total = 0;
      this.transactions.forEach(transaction => {
        if (transaction.type === 'income') {
          total += transaction.amount;
        } else {
          total -= transaction.amount;
        }
      });
      this.saldo = total;
    }
  }
};
</script>

<style scoped>
#app {
  width: 80%;
  margin: 5%;
  text-align: center;
}
</style>

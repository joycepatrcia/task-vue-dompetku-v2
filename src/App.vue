<template>
  <div id="app">
    <center><h2 style="margin-bottom: 5%;">Dompetku - Expense & Income Money Management</h2></center>
    
    <transaction-input @addTransaction="addTransaction" />

    <transaction-list 
      :transactions="transactions" 
      @deleteTransaction="deleteTransaction"
      @deleteAllTransactions="deleteAllTransactions"
    />
    <center>
      <div style="margin-top: 5%; width: 50%; ">
        <div style="display: flex; justify-content: space-between; gap: 20px; text-align: left;">
          <div style="flex: 1;">
            <h5>My Transaction: {{ getTotalTransactionCount() }} Transaction</h5>
            <h5>My Balance: Rp {{ saldo }}</h5>
          </div>

          <div style="flex: 1; text-align: right;">
            <h6>Income: Rp {{ getTotalIncome() }}</h6>
            <h6>Expense: Rp {{ getTotalExpense() }}</h6>
          </div>
        </div>
      </div>
    </center>
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
  mounted() {
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      this.transactions = JSON.parse(savedTransactions);
      this.updateSaldo();
    }
  },
  methods: {
    addTransaction(transaction) {
      this.transactions.push(transaction);
      this.updateSaldo();
      this.saveTransactions();
    },

    deleteTransaction(index) {
      this.transactions.splice(index, 1);
      this.updateSaldo();
      this.saveTransactions();
    },

    deleteAllTransactions() {
      this.transactions = [];
      this.updateSaldo();
      this.saveTransactions();
    },

    getTotalTransactionCount() {
      return this.transactions.length;
    },

    getTotalIncome() {
      return this.transactions
        .filter(transaction => transaction.type === 'income')
        .reduce((acc, transaction) => acc + transaction.amount, 0);
    },

    getTotalExpense() {
      return this.transactions
        .filter(transaction => transaction.type === 'expense')
        .reduce((acc, transaction) => acc + transaction.amount, 0);
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
    },

    saveTransactions() {
      localStorage.setItem('transactions', JSON.stringify(this.transactions));
    }
  }
};
</script>

<style scoped>
#app {
  width: 80%;
  margin: 2%;
  margin-left: 10%;
  text-align: center;
}
</style>

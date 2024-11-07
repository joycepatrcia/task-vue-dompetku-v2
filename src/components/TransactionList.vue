<template>
  <div style="margin-top: 5%;">
    <center>
      <table class="table table-striped" style="width: 50%;">
        <thead style="align-items: center; text-align: center;">
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>description</th>
            <th></th>
          </tr>
        </thead>
        <tbody style="align-items: center; text-align: center;">
          <tr v-for="(transaction, index) in transactions" :key="index">
            <td>{{ transaction.category }}</td>
            <td>Rp {{ transaction.amount }}</td>
            <td>{{ transaction.type === 'income' ? 'Income' : 'Expense' }}</td>
            <td>
              <b-button @click="deleteTransaction(index)" variant="danger">Delete</b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </center>
    <div class="d-flex justify-content-start mt-3" style="margin-left: 25%;">
      <b-button v-if="transactions.length > 0" @click="confirmClearAll" variant="outline-danger">Delete All List</b-button>
    </div>
  </div>
</template>

<script>
  import Swal from 'sweetalert2';

  export default {
    props: ['transactions'],
    methods: {
      deleteTransaction(index) {
        this.$emit('deleteTransaction', index);
      },
      confirmClearAll() {
        Swal.fire({
          title: 'Delete all entries?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete all',
          cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            this.$emit('clearAll');
            Swal.fire('Deleted!', 'All entries have been deleted.', 'success');
          }
        });
      }
    }
  };
</script>

<style scoped>
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

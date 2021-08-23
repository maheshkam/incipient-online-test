<template>
<div>
<button type="button" class="btn btn-info btn-md float-right" data-toggle="modal" data-target="#myModal">Create User</button>
  <div class="hello">
    
    <table>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Activate</th>
        <th>Action</th>
      </tr>
      <tr v-for="(data, index) in gridData" v-bind:key="index">
        <td>{{data.name}}</td>
        <td>{{data.surname}}</td>
        <td><b>{{data.email}}</b></td>
        <td>{{data.phonenumber}}</td>
        <td>
          <span class="badge badge-light">
            {{data.activate}}
          </span>
        </td>
        <td>
          <button class="btn btn-success btn-md " type="button" @click.prevent="editdata">Edit</button>
          <button class="btn btn-danger btn-md deleteb" type="button" @click.prevent="deletedata">Delete</button>
        </td>
      </tr>
    </table>
  </div>

    <div class="modal fade modal-xl" id="myModal" ref="gg" role="dialog">
      <div class="modal-dialog modal-lg">
      
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create User</h4>
          </div>
          <div class="modal-body">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label class="float-left" for="name">Name</label>
                <input type="text" v-model="addform.name" class="form-control" id="name" placeholder="Name">
              </div>
              <div class="form-group col-md-6">
                <label class="float-left" for="surname">Surname</label>
                <input type="Surname" v-model="addform.surname" class="form-control" id="surname" placeholder="Surname">
              </div>
              <div class="form-group col-md-6">
                <label class="float-left" for="email">Email Address</label>
                <input type="email" v-model="addform.email" class="form-control" id="email" placeholder="Email Address">
              </div>
              <div class="form-group col-md-6">
                <label class="float-left" for="inputPassword4">Password</label>
                <input type="text" v-model="addform.password" class="form-control" id="inputPassword4" placeholder="Password">
              </div>
              <div class="form-group col-md-6">
                <label class="float-left" for="name">Username</label>
                <input type="email" v-model="addform.username" class="form-control" id="Username" placeholder="Username">
              </div>
              <div class="form-group col-md-6">
                <label class="float-left" for="surname">Company</label>
                <input type="text" v-model="addform.company" class="form-control" id="company" placeholder="Company">
              </div>
              <div class="form-group col-md-6">
                <label class="float-left" for="surname">Phone Number</label>
                <input type="text" v-model="addform.phone" class="form-control" id="phonenumber" placeholder="Phone Number">
              </div>
              <div class="form-group col-md-6">
                <label class="float-left" for="surname">Phone Country Code</label>
                <input type="text" v-model="addform.country" class="form-control" id="phoneCountryCode" placeholder="Phone Country Code">
              </div>
              <div class="form-group col-md-6">
                <button type="submit" class="float-left btn btn-primary ml-2 pl-2" @click.prevent="savedata">Save</button>
              </div>  
            </div>
          </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
        
      </div>
    </div>
</div>  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return  {
      gridData: [ 
        {
          name: 'test',
          surname: 'dd',
          email: 'test@test.com',
          phonenumber: '1234567890  ',
          activate: 'Active'
        },
        {
          name: 'test1',
          surname: 'dd1',
          email: 'test1@test.com',
          phonenumber: '0123456789  ',
          activate: 'Inactive'
        }
      ],
      addform: {
        name: '',
        surname: '',
        email: '',
        password: '',
        phone: '',
        country: '',
        company: '',
        username: ''
      }
    }
  },
  props: {
    msg: String
  },
  methods: {
    savedata () {
      console.log(this.addform);
      let dd = document.getElementById("myModal");
      dd.hidden = true
      this.gridData.push(this.addform);
      this.addform = {
        name: '',
        surname: '',
        email: '',
        password: '',
        phone: '',
        country: '',
        company: '',
        username: ''
      }
    },
    editdata () {

    },
    deletedata () {
      confirm("Are you sure to delete this user?");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
hello {
  margin: auto !important;
  width: 50% !important;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 70%;
  margin: auto;
  margin-top: 15px;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
spanact {
  
}
editb {
  
}
.deleteb {
  margin-left: 10px;
}
addb {
  float: right !important;
  margin-right: 0px !important;
}
.float-left {
  float: left;
}
</style>

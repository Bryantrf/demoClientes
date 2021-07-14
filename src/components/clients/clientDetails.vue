<template>
  <div class="pb-4">
    <div class="col-10 mx-auto">
      <b-card class="shadow-sm mb-2 border-0 rounded">
        <div class="header-title rounded pr-3 d-flex align-items-center">
          <b-iconstack font-scale="1.8">
            <b-icon stacked icon="circle-fill" variant="success"></b-icon>
            <b-icon
              stacked
              icon="card-checklist"
              class="text-white"
              scale="0.6"
            ></b-icon>
          </b-iconstack>
          <strong class="h5 ml-2 mb-0">
            <span v-if="id === '0'">New</span>
            <span v-else>Editing</span>
            client
            <span v-if="id !== '0'"> id: {{ client.id }}</span>
          </strong>
         
        </div>
      </b-card>

      <b-card class="mt-3" title="Client details">
        <div class="col-4 ml-auto mb-5">
          <b-form-checkbox
            v-model="client.active"
            id="checkbox-1"
            name="checkbox-1"
            :value="true"
            :unchecked-value="false"
          >
            Client status active?
          </b-form-checkbox>
        </div>
        <b-form class="mt-3" @submit="onSubmit">
          <b-row>
            <b-col>
              <b-form-group
                id="inputname"
                label="Full name:"
                label-for="input-name"
              >
                <input
                  id="input-name"
                  type="text"
                  class="form-control"
                  v-model="client.name"
                /> </b-form-group
            ></b-col>
            <b-col>
              <b-form-group
                id="inputemail"
                label="Email:"
                label-for="input-email"
              >
                <input
                  id="input-email"
                  type="email"
                  class="form-control"
                  v-model="client.email"
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="input-phone"
                label="phone"
                label-for="input-text"
              >
                <input
                  id="input-phone"
                  type="text"
                  class="form-control"
                  v-model="client.phoneNumber"
                /> </b-form-group
            ></b-col>
          </b-row>

          <b-row class="p-4">
              <label class="typo__label">Addresses</label>
              <multiselect v-model="client.addresses" :options="address" :multiple="true" placeholder="Select one or more" label="name" track-by="name"></multiselect>
             </b-row>

          <div class="my-3 ml-auto d-flex justify-content-end">
            <b-button  :to="{ name: 'ClientList' }" size="sm"
              >Go to list</b-button
            >
            <b-button class="ml-2" variant="success" type="submit" size="sm"
              >Save</b-button
            >
          </div>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ClientVM } from "./models/index";
import clientService from "./client.service";

@Component
export default class ClientDetails extends Vue {
  public id = "";
  private clientList: ClientVM[] = [] 

  public address =  [
      {
        "id": 1,
        "name": "ad1",
        "active": true
      },
      {
        "id": 2,
        "name": "ad2",
        "active": true
      },
      {
        "id": 3,
        "name": "ad3",
        "active": true
      },
      {
        "id": 4,
        "name": "ad4",
        "active": true
      }
    ]

  public client = {} as ClientVM;

  mounted() {
    this.id = this.$route.params.id;
    if (+this.id !== 0) {
      this.getClientRecord(this.id);
    }
  }

  protected async getClientRecord(id: string) {

     const res = JSON.parse(localStorage.getItem("clientList"))
     this.clientList = res
     console.log(res)

      const response = res.find((client) => client.id.toString() == id);
      response != undefined ? this.client = response : this.$swal.fire("User doesn't exist!!")

  }

  protected async onSubmit(event: any) {
    event.preventDefault();
    if (this.id == "0") {
        const a = this.$swal({
      title: "Corfirm operation",
      text: "¿Are you sure about this update operation?",
      icon: "warning",
      showConfirmButton: true,
      confirmButtonText: "Enviar",
      confirmButtonColor: "#1e7e34",
      showCancelButton: true,
      cancelButtonText: "Volver",
      showCloseButton: true,
    }).then((a) => {
      if (a.isConfirmed) {
         const res = JSON.parse(localStorage.getItem("clientList"))


        this.client.id = Math.random()
        res.push(this.client)
        console.log(res)
        localStorage.setItem("clientList", JSON.stringify(res))
        this.$router.push({name: "ClientList"})

      }
    });
    }else{

        const a = this.$swal({
      title: "Corfirm operation",
      text: "¿Are you sure about this update operation?",
      icon: "warning",
      showConfirmButton: true,
      confirmButtonText: "Send",
      confirmButtonColor: "#1e7e34",
      showCancelButton: true,
      cancelButtonText: "Go back",
      showCloseButton: true,
    }).then((a) => {
      if (a.isConfirmed) {
        const res = JSON.parse(localStorage.getItem("clientList"))

        const index = res.findIndex(x => x.id == this.client.id)
        res.splice(index,1)
        res.push(this.client)
       
        localStorage.setItem("clientList", JSON.stringify(res))
        this.$router.push({name: "ClientList"})
      }
    });
    }
  
    }
  
}
</script>

<style>
#content {
  padding-top: 80px;
}
#id-card {
  display: inline-block;
  float: left;
  margin-right: 2em;
}
.id-card {
  width: 336px;
  height: 192px;
  background: #fff;
  padding: 10px;
  position: relative;
}
.id-card__mugshot {
  position: absolute;
  right: 10px;
  width: 100px;
  height: 100px;
  border-left: 4px solid #e12e2f;
  background: #fff;
}
.id-card__mugshot img {
  /* position: relative; */

  width: 100px;
  height: 100px;
}
.id-card__logo {
  margin-right: 200px;
  width: 100px;
}
.id-card__subject-id {
  position: absolute;
  top: 54px;
  left: 130px;
  font-family: monospace;
  font-size: 14pt;
  transform: rotate(-4deg);
}
.id-card__banner {
  position: relative;
  height: 10pt;
  background: #1d80cd;
  margin-top: 10px;
  margin-left: -10px;
  margin-right: 100px;
  padding-left: 12px;
}
.id-card__banner-text {
  position: relative;
  color: #fff;
  font-size: 8pt;
  letter-spacing: 2px;
  line-height: 0;
  top: -6px;
}
.id-card__details {
  padding-top: 20px;
  font-size: 6pt;
  line-height: 1.5;
  text-transform: uppercase;
  width: 60%;
  display: inline-block;
}
.id-card__details--short {
  float: right;
  margin-left: 30px;
  width: 100px;
}
.id-card__detail {
  height: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
}
.id-card__detail + .id-card__detail {
  border-top: 1px solid #eee e;
}
.id-card__detail-label {
  color: #333;
  font-weight: bold;
}
.id-card__detail-label:after {
  content: " • ";
  font-weight: normal;
}
.logo__big {
  font-size: 24pt;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: 4px;
}
.logo__small {
  font-size: 10pt;
  letter-spacing: 4px;
  position: relative;
  top: -10px;
  left: 2px;
}
</style>

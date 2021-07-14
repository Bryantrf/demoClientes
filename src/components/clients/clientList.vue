<template>
  <div>
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
          <strong class="h5 ml-2 mb-0">List of Clients</strong>
          <div class="ml-auto">
            <b-button size="sm" @click="goToDetail('0')">
              <b-icon
                stacked
                icon="card-checklist"
                class="text-white"
                scale="0.6"
              ></b-icon
              >Create User</b-button
            >
          </div>
        </div>
      </b-card>
      <b-card class="shadow-sm rounded border-0">
        <div class="d-flex justify-content-center">
          <transition name="fade" appear mode="out-in">
            <div
              v-if="loding"
              class="
                text-center
                d-flex
                justify-content-center
                align-items-center
                position-absolute
                loader-container
              "
            >
              <b-spinner :variant="variantColor" key="danger" type="grow">
              </b-spinner>
              {{ label }}
            </div>
          </transition>
        </div>

        <div class="col-4 ml-auto m-3">
          <span>
            Search:
            <input
              class="form-control"
              id="input-1"
              v-model="filter"
              type="text"
              placeholder="Buscar"
              required
            />
          </span>
        </div>
        <div class="col-12">
          <div>
            <b-table
              show-empty
              striped
              hover
              :fields="fields"
              :filter="filter"
              :items="items"
            >
              <template v-slot:cell(name)="row">
                <span>{{ row.item.name }}</span>
              </template>
              <template v-slot:cell(isActive)="row">
                <span>
                  <strong v-if="row.item.active" class="text-success"
                    >Active</strong
                  >
                  <strong v-if="!row.item.active" class="text-danger"
                    >Disabled</strong
                  ></span
                >
              </template>

              <template v-slot:cell(actions)="row">
                <a
                  class="action text-primary cursor-pointer"
                  @click="goToDetail(row.item.id)"
                >
                  <font-awesome-icon icon="edit" />
                </a>
              </template>

              <template v-slot:empty>
                <span class="d-flex justify-content-center"
                  >There're no records</span
                >
              </template>
            </b-table>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import clientService from "./client.service";
import { ClientVM } from "./models";

@Component
export default class ClientList extends Vue {
  public filter = "";
  public items: ClientVM[] = [];
  public label = "";
  public variantColor = "";

  public fields = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "isActive",
      label: "State",
    },
    { key: "actions", label: "", class: "text-center" },
  ];

  public loding = false;

  public async getClientRecords() {
    try {
      this.loding = true;
      this.variantColor = "success";
      this.label = "Loding...";
      //call "api"
        const list = JSON.parse(localStorage.getItem("clientList"))
        console.log(list)
      if (list == null) {
           const res = await clientService.getClients();
      if (res.data) {
        this.loding = false;
          localStorage.setItem("clientList", JSON.stringify(res.data))
          this.items = res.data

       }
      }else{
        this.items = list
        this.loding = false;

      }
     
    } catch {
      this.variantColor = "danger";
      this.label = "Something's wrong, please reload the page";
    }
  }

  async mounted() {
    await this.getClientRecords();
  }

  public goToDetail(id: string) {
    this.$router.push({ name: "clientDetail", params: { id: id } });
  }
}
</script>

<style></style>

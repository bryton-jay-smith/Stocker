import axios from "axios";

export default {

    getStrains: function () {
        return axios.get("/api/strains")
    },
    getStrain: function(id) {
        return axios.get("/api/strains/" + id);
      },
};
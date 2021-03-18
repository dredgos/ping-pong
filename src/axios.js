import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://restful.training/api/counters",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

        // use your own key
        Authorization: "Bearer 2|IFA4ohQgNIDurQphtC4sSGUk13zpzyU1milej1I1",
    },
});
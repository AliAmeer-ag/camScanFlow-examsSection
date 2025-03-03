import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";

import App from "./App.vue";
import TermsAndConditions from "./pages/termsAndConditions/TermsAndConditions.vue";
import Home from "./pages/home/Home.vue";
import ExamRegistration from "./pages/examRegistration/ExamRegistration.vue";
import ApplicantInformation from "./pages/applicantInformation/ApplicantInformation.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/exam-registration",
      component: ExamRegistration,
      children: [
        {
          path: "terms-and-conditions",
          name: "terms-and-conditions",
          component: TermsAndConditions,
        },
        {
          path: "applicant-information",
          name: "applicant-information",
          component: ApplicantInformation,
        },
      ],
    },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");

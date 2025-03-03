import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";

import App from "./App.vue";
import Home from "./pages/home/Home.vue";
import ExamRegistration from "./pages/examRegistration/ExamRegistration.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    {
      path: "/exam-registration",
      component: ExamRegistration,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
});

const app = createApp(App);

app.use(router);

app.mount("#app");
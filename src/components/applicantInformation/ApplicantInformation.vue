<template>
  <div class="flex flex-col gap-6">
    <h1 class="mb-6">Exam Registration</h1>
    <hr />

    <!-- Form with validation -->
    <Form
      :validation-schema="validationSchema"
      @submit="onSubmit"
      class="space-y-6"
    >
      <!-- name -->
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        <div class="col-span-1">
          <label for="firstName">First Name</label>
          <Field
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
          />
          <ErrorMessage name="firstName" class="text-red-500 text-xs" />
        </div>

        <div class="col-span-1">
          <label for="middleName">Middle Name</label>
          <Field
            id="middleName"
            name="middleName"
            type="text"
            placeholder="Enter your middle name"
          />
          <ErrorMessage name="middleName" class="text-red-500 text-xs" />
        </div>

        <div class="col-span-1">
          <label for="surname">Surname</label>
          <Field
            id="surname"
            name="surname"
            type="text"
            placeholder="Enter your surname"
          />
          <ErrorMessage name="surname" class="text-red-500 text-xs" />
        </div>
      </div>

      <!-- Location & Contact Information -->
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        <div class="col-span-1">
          <label for="country">Country</label>
          <Field id="country" name="country" as="select">
            <option value="">please select country</option>
            <option value="iraq" selected>Iraq</option>
            <option value="iraq">United Arab Emirates</option>
          </Field>
          <ErrorMessage name="country" class="text-red-500 text-xs" />
        </div>

        <div class="col-span-1">
          <label for="postcode">Post Code</label>
          <Field
            id="postcode"
            name="postcode"
            type="text"
            placeholder="Enter your post code"
          />
          <ErrorMessage name="postcode" class="text-red-500 text-xs" />
        </div>

        <div class="col-span-1">
          <label for="phone">Phone</label>
          <Field
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
          />
          <ErrorMessage name="phone" class="text-red-500 text-xs" />
        </div>
      </div>

      <!-- Personal Details -->
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        <div class="col-span-1">
          <label for="email">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
          />
          <ErrorMessage name="email" class="text-red-500 text-xs" />
        </div>

        <div class="col-span-1">
          <label for="address">Address</label>
          <Field
            id="address"
            name="address"
            rows="3"
            placeholder="Enter your address"
          />
          <ErrorMessage name="address" class="text-red-500 text-xs" />
        </div>

        <div class="col-span-1">
          <label for="birthdate">Birth Date</label>
          <Field id="birthdate" name="birthdate" type="date" />
          <ErrorMessage name="birthdate" class="text-red-500 text-xs" />
        </div>
      </div>

      <!-- Work Information -->
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        <div class="col-span-1">
          <label for="universityName">University Name</label>
          <Field
            id="universityName"
            name="universityName"
            type="text"
            placeholder="Enter your university name"
          />
          <ErrorMessage name="universityName" class="text-red-500 text-xs" />
        </div>

        <div class="col-span-1">
          <label for="workingField">Your Working Field</label>
          <Field
            id="workingField"
            name="workingField"
            type="text"
            placeholder="Enter your working field"
          />
          <ErrorMessage name="workingField" class="text-red-500 text-xs" />
        </div>

        <div class="col-span-1">
          <label for="experience">Years of Experience</label>
          <Field id="experience" name="experience" as="select">
            <option value="">Select Experience</option>
            <option value="1-2">1-2 Years</option>
            <option value="2-5">2-5 Years</option>
            <option value="5+">5+ Years</option>
          </Field>
          <ErrorMessage name="experience" class="text-red-500 text-xs" />
        </div>
      </div>

      <!-- Note Section -->
      <div>
        <label for="note">Note</label>
        <Field
          id="note"
          name="note"
          as="textarea"
          rows="4"
          placeholder="Enter your note here"
        />
        <ErrorMessage name="note" class="text-red-500 text-xs" />
      </div>

      <div class="flex items-center gap-6 mt-6">
        <button type="submit">Next</button>
        <button @click="handleCancel" class="secondary">Cancel</button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

// Form state and router
const router = useRouter();

const props = defineProps({
  currentStep: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["updateCurrentStep"]);

// Yup validation schema
const validationSchema = yup.object({
  firstName: yup.string().required("First name is required."),
  middleName: yup.string().required("Middle name is required."),
  surname: yup.string().required("Surname is required."),
  email: yup
    .string()
    .email("Valid email is required.")
    .required("Email is required."),
  country: yup.string().required("Country is required."),
  postcode: yup.string().required("Post code is required."),
  phone: yup.string().required("Phone number is required."),
  address: yup.string().required("Address is required."),
  birthdate: yup.date().required("Birth date is required."),
  universityName: yup.string().required("University name is required."),
  workingField: yup.string().required("Working field is required."),
  experience: yup.string().required("Experience is required."),
  note: yup.string().required("Note is required."),
});

// const { handleSubmit } = useForm({
//   validationSchema,
// });

const onSubmit = (values: any) => {
  console.log("Form submitted with values: ", values);
  emit("updateCurrentStep", props.currentStep + 1);
};

const handleCancel = () => {
  router.replace("/");
};
</script>

<style scoped>
/* Add additional styles as needed */
</style>

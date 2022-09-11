import serviceImg1 from "../assets/images/service-1.jpg";
import serviceImg2 from "../assets/images/service-2.jpg";
import serviceImg3 from "../assets/images/service-3.jpg";
import patient1 from "../assets/images/patient-1.jpg";
import patient2 from "../assets/images/patient-2.jpg";
import patient3 from "../assets/images/patient-3.jpg";

const dt = new Date();

const data = {
  clinicName: "FitPhyisio",
  location: "Hasapota Ganesh Marg, Jhamsikhel",
  urls: {
    googleMapUrl: {
      value: "https://goo.gl/maps/wgAwELRB31wGtvqm8",
    },
    facebookUrl: {
      value: "",
    },
    instagramUrl: {
      value: "",
    },
    linkedinUrl: {
      value: "",
    },
    tiktokUrl: {
      value: "",
    },
  },
  timing: {
    brief: "Mon to Fri 10:00 AM - 7:00 PM NPT",
    weekend: "Sat 10:00 AM - 2:00 PM NPT",
  },
  contact: {
    number: "+977-9841092994",
    email: "fitphysio.np@gmail.com",
  },
  highlights: [
    {
      id: "__highlight_x_0",
      variant: "r",
      heading: "Physiotherapy",
      paragraph:
        "At Fitphysio Clinic, our mission is to find the root cause of your discomfort so you can recover faster.",
    },
    {
      id: "__highlight_y_1",
      variant: "y",
      heading: "Fitness",
      paragraph:
        "We facilitate you with a personalized diet and workout routine that will help you live a healthier lifestyle.",
    },
    {
      id: "__highlight_z_2",
      variant: "w",
      heading: "Counselling",
      paragraph: "We provide professional guidance in resolving problems to all age groups.",
    },
  ],
  introduction: {
    slogan: "Fitness and nutrition are the groundwork for a healthy lifestyle",
    points: [
      {
        key: "__introduction_point_x_0",
        value: "The goal of FitPhysio Clinic is to promote fitness and a healthy lifestyle.",
      },
      {
        key: "__introduction_point_y_1",
        value: "Medically challenged individuals can get weight management services from FitPhysio.",
      },
      {
        key: "__introduction_point_z_2",
        value:
          "Integrating cutting-edge technology, science, and patient care, we strive to deliver services of the highest caliber.",
      },

      {
        key: "__introduction_point_a_3",
        value: "Located in Jhamsikhel, Providing service since 2022.",
      },
    ],
  },
  services: [
    {
      id: "__service_x_0",
      title: "Physiotherapy",
      image: serviceImg1,
      description: "We offer services to improve physical function, pain relief, and strength and mobility.",
      points: [
        { id: "__service_0_point_x_0", value: "Fitness" },
        { id: "__service_0_point_y_1", value: "Pain reduction" },
        { id: "__service_0_point_z_2", value: "Heart / diabetic conditions" },
        { id: "__service_0_point_a_3", value: "Home care services" },
      ],
    },
    {
      id: "__service_y_1",
      title: "Weight Management",
      image: serviceImg2,
      description: "For all age groups, there is a specialized diet and exercise program.",
      points: [
        { id: "__service_1_point_x_0", value: "Nutrition and diet plan" },
        { id: "__service_1_point_y_1", value: "Weight loss" },
        { id: "__service_1_point_z_2", value: "Weight maintenance" },
        { id: "__service_1_point_a_3", value: "Strength and endurance training" },
      ],
    },
    {
      id: "__service_z_2",
      title: "Pregnancy and postpartum care",
      image: serviceImg3,
      description: "Weight loss after pregnancy is safe but requires attention and guidelines.",
      points: [
        { id: "__service_2_point_x_0", value: "Breating exercises" },
        { id: "__service_2_point_y_1", value: "Diastasis recti" },
        { id: "__service_2_point_z_2", value: "Kegel's exercise" },
        { id: "__service_2_point_a_3", value: "Pregnancy nutrition" },
      ],
    },
  ],
  clients: [
    {
      id: "__client_x_0",
      image: patient1,
      alt: "patient-1 image",
    },
    {
      id: "__client_y_1",
      image: patient2,
      alt: "patient-2 image",
    },
    {
      id: "__client_z_2",
      image: patient3,
      alt: "patient-3 image",
    },
  ],
  developer: {
    name: "ishanpradhan",
    linkedinUrl: "https://www.linkedin.com/in/ishanpradhan/",
  },
  therapist: [
    { key: "__about_therapist_x_0", value: "Bachelors in Physiotherapy" },
    { key: "__about_therapist_y_1", value: "Fitness and rehab professional" },
    { key: "__about_therapist_z_2", value: `${dt.getFullYear() + 1 - 2016} years of experience` },
    { key: "__about_therapist_a_3", value: "Certified kinesio taping practitioner" },
  ],
};

export default data;

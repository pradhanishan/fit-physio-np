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
      { key: "__introduction_point_x_0", value: "Lorem ipsum dolor sit amet." },
      { key: "__introduction_point_y_1", value: "Lorem ipsum dolor sit amet." },
      { key: "__introduction_point_z_2", value: "Lorem ipsum dolor sit amet." },
    ],
  },
  services: [
    {
      id: "__service_x_0",
      title: "Physiotherapy",
      image: serviceImg1,
      description:
        "Our physiotherapy program helps you reduce pain, avoid surgery, improve strength, reduce dependency on medicines, manage heart and diabetic conditions and ease pregnancy/ postpartum care. We make sure you stay fit at all ages and phases.",
      points: [
        { id: "__service_0_point_x_0", value: "Fitness" },
        { id: "__service_0_point_y_1", value: "Pain reduction" },
        { id: "__service_0_point_z_2", value: "Pregnancy and postpartum care" },
        { id: "__service_0_point_a_3", value: "Heart / diabetic conditions" },
      ],
    },
    {
      id: "__service_y_1",
      title: "Weight Management",
      image: serviceImg2,
      description:
        "We assist on your weight loss journey by providing a diet plan and workout routine that best suits you. We monitor your progress and make improvements to your quality of life to achieve the best results.",
      points: [
        { id: "__service_1_point_x_0", value: "Diet plan" },
        { id: "__service_1_point_y_1", value: "Weight loss" },
        { id: "__service_1_point_z_2", value: "Weight maintenance" },
        { id: "__service_1_point_a_3", value: "Nutrition" },
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

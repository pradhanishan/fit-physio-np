import serviceImg1 from "../assets/images/service-1.jpg";
import serviceImg2 from "../assets/images/service-2.jpg";
import serviceImg3 from "../assets/images/service-3.jpg";
import patient1 from "../assets/images/patient-1.jpg";
import patient2 from "../assets/images/patient-2.jpg";
import patient3 from "../assets/images/patient-3.jpg";

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
  },
  timing: {
    brief: "Mon to Fri 10:00 AM - 5:00 PM NPT",
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
      heading: "Lorem, ipsum dolor.",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae deleniti odit? Nihil dolore omnis, obcaecati voluptas in quia minus, debitis quisquam iste delectus voluptate sit laboriosam deleniti ducimus architecto.",
    },
    {
      id: "__highlight_y_1",
      variant: "y",
      heading: "Lorem, ipsum dolor.",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae deleniti odit? Nihil dolore omnis, obcaecati voluptas in quia minus, debitis quisquam iste delectus voluptate sit laboriosam deleniti ducimus architecto.",
    },
    {
      id: "__highlight_z_2",
      variant: "w",
      heading: "Lorem, ipsum dolor.",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae deleniti odit? Nihil dolore omnis, obcaecati voluptas in quia minus, debitis quisquam iste delectus voluptate sit laboriosam deleniti ducimus architecto.",
    },
  ],
  introduction: {
    slogan: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, reiciendis?",
    points: [
      { key: "__introduction_point_x_0", value: "Lorem ipsum dolor sit amet." },
      { key: "__introduction_point_y_1", value: "Lorem ipsum dolor sit amet." },
      { key: "__introduction_point_z_2", value: "Lorem ipsum dolor sit amet." },
    ],
  },
  services: [
    {
      id: "__service_x_0",
      title: "Card Title",
      image: serviceImg1,
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      points: [
        { id: "__service_0_point_x_0", value: "Cras justo odio" },
        { id: "__service_0_point_y_1", value: "Dapibus ac facilisis in" },
        { id: "__service_0_point_z_2", value: "Vestibulum at eros" },
      ],
    },
    {
      id: "__service_y_1",
      title: "Card Title",
      image: serviceImg2,
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      points: [
        { id: "__service_1_point_x_0", value: "Cras justo odio" },
        { id: "__service_1_point_y_1", value: "Dapibus ac facilisis in" },
        { id: "__service_1_point_z_2", value: "Vestibulum at eros" },
      ],
    },
    {
      id: "__service_z_2",
      title: "Card Title",
      image: serviceImg3,
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      points: [
        { id: "__service_2_point_x_0", value: "Cras justo odio" },
        { id: "__service_2_point_y_1", value: "Dapibus ac facilisis in" },
        { id: "__service_2_point_z_2", value: "Vestibulum at eros" },
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
};

export default data;

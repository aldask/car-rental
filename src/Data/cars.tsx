import AudiA3 from "../images/Cars/AudiA3.png";
import BMW3 from "../images/Cars/BMW3.png";
import MBE from "../images/Cars/MBE.png";
import GolfGTI from "../images/Cars/GolfGTI.png";

export interface Car {
  label: string;
  img: any;
  manufacturer: string;
  model: string;
  year: string;
  doors: string;
  ac: string;
  transmission: string;
  fuel: string;
  price: string;
};

export const cars: Car[] = [
  {
    label: "Audi A3",
    img: AudiA3,
    manufacturer: "Audi",
    model: "A3",
    year: "2021",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: "42",
  },
  {
    label: "BMW 3 Series",
    img: BMW3,
    manufacturer: "BMW",
    model: "3 Series",
    year: "2021",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: "70",
  },
  {
    label: "Mercedes-Benz E-Class",
    img: MBE,
    manufacturer: "Mercedes-Benz",
    model: "E-Class",
    year: "2021",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: "95",
  },
  {
    label: "VW Golf GTI",
    img: GolfGTI,
    manufacturer: "Volkswagen",
    model: "Golf GTI",
    year: "2021",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: "75",
  },
];
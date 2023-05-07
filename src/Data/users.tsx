import ArielleSwaney from "../images/ReviewersUsers/Arielle Swaney.jpg";
import DavisBosson from "../images/ReviewersUsers/Davis Bosson.jpg";
import DarrickAderman from "../images/ReviewersUsers/Darrick Aderman.jpg";
import ReynaldoChoque from "../images/ReviewersUsers/Reynaldo Choque.jpg";
import MedaHubers from "../images/ReviewersUsers/Meda Hubers.jpg";
import NerissaHeilbrun from "../images/ReviewersUsers/Nerissa Heilbrun.jpg";

export interface User {
  fullname: string;
  userPic: string;
  userMessage: string;
}

export const users: User[] = [
  {
    fullname: "Arielle Swaney",
    userPic: ArielleSwaney,
    userMessage: "I had a fantastic experience renting a car from this website. The process was incredibly easy and the customer service was top-notch. The car was clean and in great condition. I would definitely rent from them again!",
  },
  {
    fullname: "Davis Bosson",
    userPic: DavisBosson,
    userMessage: "This website made renting a car a breeze! The prices were really competitive and the selection of cars was impressive. Customer service was friendly and helpful. I would definitely recommend this website to anyone in need of a car rental.",
  },
  {
    fullname: "Darrick Aderman",
    userPic: DarrickAderman,
    userMessage: "I was blown away by how easy and affordable it was to rent a car from this website. The car was in excellent condition and the customer service was excellent. I will definitely be using this website again!",
  },
  {
    fullname: "Reynaldo Choque",
    userPic: ReynaldoChoque,
    userMessage: "I had a wonderful experience renting a car from this website. The process was straightforward and the prices were very reasonable. The customer service was fantastic and the car itself was great. Highly recommend!",
  },
  {
    fullname: "Meda Hubers",
    userPic: MedaHubers,
    userMessage: "I was really impressed with the level of service I received from this car rental website. The prices were competitive and the selection of cars was great. The customer service reps were friendly and knowledgeable. I will definitely be using this website again!",
  },
  {
    fullname: "Nerissa Heilbrun",
    userPic: NerissaHeilbrun,
    userMessage: "I had a great experience renting a car from this website. The process was really easy and the prices were really reasonable. The customer service was fantastic and the car was in excellent condition. I would definitely recommend this website to anyone in need of a car rental.",
  },
];

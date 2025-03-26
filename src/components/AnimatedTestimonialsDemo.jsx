import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "James leads the company, making high-level strategic decisions, setting goals, overseeing operations, and ensuring the vision and mission are aligned with the company’s growth and success.",
      name: "James Anderson",
      designation: "Chief Executive Officer",
      src: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
    },
    {
      quote:
        "Charlotte manages the company's financial actions, including budgeting, forecasting, and financial reporting. She ensures financial stability and growth while advising on business investments and strategy.",
      name: "Charlotte Johnson",
      designation: "Chief Financial Officer",
      src: "https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=Tx3nGQfxaI781gi97Siw7DIEBbKg1oBxl8n0JEwMQ6s=",
    },
    {
      quote:
        "Karan is responsible for developing and maintaining the website, optimizing performance, ensuring user-friendly navigation, and implementing technical updates for seamless user experience.",
      name: "Karan Sharma",
      designation: "Web Developer",
      src: "https://img.freepik.com/free-photo/portrait-happy-manager-holding-leather-case_1262-5329.jpg",
    },
    {
      quote:
        "Isha oversees the editorial team, ensuring content quality and consistency across platforms. She edits articles for clarity, accuracy, and tone, maintaining the website's voice.",
      name: "Isha Verma",
      designation: "Editorial Lead ",
      src: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8zNV9iZWF1dGlmdWxfc21pbGluZ195b3VuZ19pbmRpYW5fYnVzaW5lc3Nfd29tYV8yYWM3MjMyNS1jZmU3LTQ5ODgtODBkNi03YjViZTg3ODYzNjNfMS5qcGc.jpg",
    },
    {
      quote:
        "Reyansh provides insightful analysis and commentary on ongoing sports events, tracks statistics, and delivers engaging reports that captivate the website's audience.",
      name: "Reyansh Gupta",
      designation: "Sports Analyst ",
      src: "https://i.pinimg.com/1200x/8e/5f/0d/8e5f0de18407447bc16591decb3f3233.jpg",
    },
    {
      quote:
        "Vihan leads digital marketing efforts, creating engaging campaigns, managing social media platforms, and ensuring the website maintains a strong and consistent online presence.",
      name: "Vihan Mehta ",
      designation: "Marketing Manager",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_W6uTt4zmRdO6Gc-AFIGflHAHoaZ8Ajdu8Q&s",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

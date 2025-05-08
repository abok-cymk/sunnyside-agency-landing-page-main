import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
const clients = [
  {
    image: "/image-emily.jpg",
    testimonial:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    title: "Managing Director",
  },
  {
    image: "/image-thomas.jpg",
    testimonial:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    title: "Chief Operating Officer",
  },
  {
    image: "/image-jennie.jpg",
    testimonial:
      " Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    title: "Business Owner",
  },
];
const App = () => {
  return (
    <>
      <header className="font-barlow bg-[url('/desktop/image-header.jpg')] bg-cover bg-no-repeat bg-center px-4 lg:px-20 object-cover h-[320px] lg:h-[470px] py-4 lg:py-0">
        <Navbar />
        <div className="flex items-center flex-col mt-4">
          <h1 className="font-fraunces text-3xl text-center lg:text-6xl/7 uppercase font-fraunces-700 text-white mt-6 lg:mt-4">
            we are creative
          </h1>
          <img
            src="/icon-arrow-down.svg"
            alt=""
            className="h-12 lg:h-20 mt-10 motion-safe:animate-bounce"
          />
        </div>
      </header>
      <main>
        <About />
        <Services />
        <section className="text-center lg:my-20 px-8 lg:px-32">
          <h2 className="font-fraunces font-fraunces-700 lg:text-[18px]/6 text-grey-400 my-6 lg:my-8 uppercase tracking-widest">
            client testimonials
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16 mt-10 lg:mt-16 mb-5 lg:mb-0">
            {clients.map((client, idx) => (
              <Testimonial
                key={idx}
                avatar={client.image}
                testimonial={client.testimonial}
                name={client.name}
                title={client.title}
              />
            ))}
          </div>
        </section>
        <Projects />
      </main>
      <footer className="bg-custom-green-500/50 flex justify-center items-center text-center px-10 lg:px-32 py-8 lg:py-20">
        <Footer />
      </footer>
    </>
  );
}

export default App;

const Testimonial = ({ avatar, testimonial, name, title }) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 justify-center items-center text-center">
      <img src={avatar} alt={name} className="rounded-full w-10 object-cover"/>
      <p className="font-barlow font-barlow-600 text-sm/6 text-grey-550 text-pretty">{testimonial}</p>
      <div>
        <h3 className="font-fraunces font-fraunces-700 text-base/6">{name}</h3>
        <span className="text-xs/6 text-grey-400 font-barlow font-barlow-600">{title}</span>
      </div>
    </div>
  );
}

export default Testimonial;

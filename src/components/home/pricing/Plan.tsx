type pricingTag = {
  name: string;
  price: number;
  features: string[];
  topSeller?: boolean;
};

function PricingPlan(props: pricingTag) {
  return (
    <div
      className={`relative ml-[2.55%] lg:ml-0 w-[95%] lg:max-w-[350px] xl:w-full xl:max-w-none  h-[60vh] md:h-[70vh] lg:h-[75vh] max-h-[540px] xl:max-h-[650px] pt-12 pb-5 px-3 lg:px-6 bg-white shadow-xl border-2 flex flex-col items-center text-center gap-1 `}
    >
      {props.topSeller === true ? (
        <h1 className="absolute right-0 top-3 px-3 py-1 bg-secondary text-white rounded-l-lg font-semibold text-sm md:text-base lg:text-xl">
          Top Seller
        </h1>
      ) : null}
      <h1 className="text-black text-2xl md:text-4xl font-semibold">
        {props.name}
      </h1>
      <h2 className="text-third text-3xl md:text-4xl font-bold">
        {props.price}$
        {/* <span className="text-lg md:text-xl font-medium">/year</span> */}
      </h2>
      <ul className="list-none w-full md:mt-8 flex flex-col gap-2 text-sm md:text-base lg:text-xl xl:text-2xl ">
        {props.features.map((e, i) => {
          return (
            <li
              className="flex items-center gap-2 font-medium text-black text-xs md:text-base lg:text-xs xl:text-base text-start"
              key={i}
            >
              <span className="w-5 h-5 text-lg text-white flex justify-center items-center  bg-gradient-to-br from-primary to-third rounded-full">
                ✓
              </span>{" "}
              {e}
            </li>
          );
        })}
      </ul>
      <button className="absolute bottom-8 xl:bottom-5  px-3 py-1 bg-primary rounded-full text-white font-semibold md:text-xl">
        Get started
      </button>
    </div>
  );
}

export default PricingPlan;

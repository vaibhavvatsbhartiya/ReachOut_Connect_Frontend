



const InfoCard = (props, isImageLeft) => {
  return (
    <>
      {isImageLeft ? (
        <>
          
            <div className=" rounded-custom1 sm:flex   sm:rounded-bl-custom2 sm:rounded-tr-custom2 md:rounded-bl-custom3 md:rounded-tr-custom3 shadow-md p-4 m-4 xl:h-customheight ">
              <div className="title_para sm:flex flex-col items-center justify-center sm:w-1/2">
                {/* Card Title */}
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-stone-800 mb-2  sm:m-2 text-center">
                  {props.title}
                </div>
                <p className="text-stone-700  m-6 p-2">{props.para}</p>
              </div>
              {/* Card Image */}
              <img
                src={props.image}
                alt="Card Image"
                className="w-full h-auto sm:w-1/2 "
              />
            </div>
          
        </>
      ) : (
        <>
        <div className="bg-stone-200 rounded-custom1 sm:flex sm:flex-row-reverse  sm:rounded-bl-custom2 sm:rounded-tr-custom2 md:rounded-bl-custom3 md:rounded-tr-custom3 shadow-md p-4 m-4 xl:h-customheight ">
              <div className="title_para sm:flex flex-col items-center justify-center sm:w-1/2">
                {/* Card Title */}
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-stone-800 mb-2  sm:m-2 text-center">
                  {props.title}
                </div>
                <p className="text-stone-700  m-6 p-2">{props.para}</p>
              </div>
              {/* Card Image */}
              <img
                src={props.image}
                alt="Card Image"
                className="w-full h-auto sm:w-1/2 "
              />
            </div>
        </>
      )}
    </>
  );
};

export default InfoCard;



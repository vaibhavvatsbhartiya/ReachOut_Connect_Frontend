const CustomComponent = (props, isImageLeft) => {
  return (
    <>
      {isImageLeft ? (
        <>
          <div className="container m-auto p-8 border-4 rounded-lg sm:text-xs " >
            <div className="flex flex-col md:flex-row md:space-x-8 ">
              {/* Card Image */}
              <div className="md:w-1/2 flex items-center">
                <img
                  src={props.image}
                  alt="Card Image"
                  className="w-full max-h-96 rounded-lg mb-4"
                />
              </div>
              {/* para */}
              <div className="md:w-1/2">
                <p className="text-lg mb-4">{props.para1}</p>
                <p className="text-lg mb-4">{props.para2}</p>
              </div>
            </div>
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

export default CustomComponent;


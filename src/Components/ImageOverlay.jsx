import EmergencyButton from "./EmergencyButton";

const ImageWithTextOverlay = (props, isVisible) => {
  return (
    <>
      {isVisible ? (
        <>
        <div
          className="bg-cover bg-center h-64 md:h-80 lg:h-[32rem] flex items-center justify-center text-blue-400"
          style={{ backgroundImage: `url(${props.image})` }}>
          <div className="text-center w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">{props.text}</h1>
            <EmergencyButton 
                inputText={props.buttonText}
            />  
          </div>
        </div>
        </>
      ) : (
        <>
        <div
          className="bg-cover bg-center h-64 md:h-80 lg:h-96 flex items-center justify-center text-blue-400"
          style={{ backgroundImage: `url(${props.image})` }}>
          <div className="text-center w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">{props.text}</h1> 
          </div>
        </div>
        </>
      )}
    </>
  );
};


// Pta nhi but yeh logic work nhi kr rha hai isVisible wala

export default ImageWithTextOverlay;

// image download form freepik
// image link: https://www.freepik.com/free-ai-image/planet-earth-topography-nature-view-generated-by-ai_41214439.htm#fromView=search&term=india+map+on+world+map+svg&page=1&position=0&track=ais_ai_generated&regularType=ai&uuid=016f7014-ea36-4714-885b-bd3cd6ac4859

// 2- Image by <a href="https://www.freepik.com/free-photo/men-using-tablet-pub_2865894.htm#query=a%20volunteer%20working%20on%20tab&position=4&from_view=search&track=ais&uuid=3b6f0462-635e-4823-b593-47defb9539f3">Freepik</a>



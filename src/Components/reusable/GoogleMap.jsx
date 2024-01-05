const GoogleMap = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773145.23856968!2d61.03387840675088!3d19.69186045087097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1704419466878!5m2!1sen!2sin"
        width="100%"
        height="550"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="maps">

      </div>
    </>
  );
};

export default GoogleMap;

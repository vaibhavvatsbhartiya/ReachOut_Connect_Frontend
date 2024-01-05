import React from "react";

function Footer() {
  return (
    <>
      <footer className=" bg-blue-500 text-gray-200 py-4  bottom-0 w-full">
        <div className="container mx-auto flex flex-col items-center justify-center sm:flex-row">
          <div className=" text-center m-1 sm:text-left sm:mb-0 mb-2 flex flex-col sm:flex-row">
            <p className="pr-2">&copy; 2023 ReachOut Connect</p>
            <p >All rights reserved.</p>
          </div>
          <div className="text-center sm:text-right">
            <a href="#" className=" hover:underline mx-2">
              Privacy Policy
            </a>
            <a href="#" className=" hover:underline mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}


export default Footer;

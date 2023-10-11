import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-32 font-[Nunito]">
      <div className="container mx-auto py-10 px-4">
        <div className="flex justify-between">
          <div className="footer-div-1">
            <h3 className="text-3xl">Download Our App</h3>
            <h1 className="text-5xl font-bold">Co<span className="text-yellow-700">ff</span>ee</h1>
          </div>



          <div className="footer-div-3">
            <h3 className="text-3xl">Contact Us:</h3>
            <p>Email: Hayah@coffee.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>

          <div className="footer-div-3">
            <h3 className="text-3xl">follow us:</h3>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
        <hr className="my-6" />
        <p className="text-center text-gray-500 text-sm">
          &copy; 2023 HayahCoffee. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

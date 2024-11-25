import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white flex flex-col md:flex-row md:justify-between gap-10 p-5">
      <div className="text-2xl">&#169; Secure Store 2024</div>
      <ul className="flex justify-between md:w-1/2">
        <li>Privacy policy</li>
        <li>Cookies policy</li>
        <li>Terms of use</li>
      </ul>
    </footer>
  );
}

export default Footer;

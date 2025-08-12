import React from "react";
const Navbar = () => {
  return (
    <div className="flex justify-between border-1">
      <div>Logo</div>
      <div>Action items</div>
    </div>
  );
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-row">
        <div className="border h-screen">Sidebar</div> {children}
      </div>
    </div>
  );
};

export default layout;

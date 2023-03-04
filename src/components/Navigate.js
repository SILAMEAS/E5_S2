import React from "react";
function Navigate({ ListLinking }) {
  return (
    <div className="w-[full] flex">
      <nav className="flex justify-center space-x-4">{ListLinking}</nav>
    </div>
  );
}
export default Navigate;

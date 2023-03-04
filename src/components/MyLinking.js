import React from "react";
import { useNavigate } from "react-router-dom";
function MyLinking({ listName, Goto }) {
  const navigate = useNavigate();
  return (
    <p
      className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-500"
      onClick={() => {
        navigate(Goto);
      }}
    >
      <p className="text-black">{listName}</p>
    </p>
  );
}
export default MyLinking;

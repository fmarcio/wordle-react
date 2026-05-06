import React, { useContext } from "react";
import { AppContext } from "../App";

interface KeyProps {
  keyVal: string;
  bigKey?: boolean;
  disabled?: boolean;
}

const Key: React.FC<KeyProps> = ({ bigKey, disabled, keyVal }) => {
  const context = useContext(AppContext);

  if (!context) return null;

  const { onDelete, onEnter, onSelectLetter } = context;

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled ? "disabled" : undefined}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
};

export default Key;

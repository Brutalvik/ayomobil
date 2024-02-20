"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

import React, { FC } from "react";

const MenuItem: FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-100 transition font-semibold"
    >
      {label}
    </div>
  );
};

export default MenuItem;

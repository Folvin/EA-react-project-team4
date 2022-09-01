import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  columns: string;
}

function CardGrid({children, columns}: Props) {
  return <div className={`grid ${columns} gap-4`}>{children}</div>;
}

export default CardGrid;

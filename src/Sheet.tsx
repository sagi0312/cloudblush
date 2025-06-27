import { useState } from "react";
import Cell from "./Cell";
export type SheetType = {
  name: string;
  value: string;
};
function Sheet() {
  const [sheet, setSheet] = useState<SheetType[]>([
    { name: "A", value: "" },
    { name: "B", value: "" },
    { name: "C", value: "" },
    { name: "D", value: "" },
  ]);

  const computeDerivedValue = (value: string) => {
    const chars = value.split("");
    let numberValue = 0;

    for (let char of chars) {
      const cell = sheet.find((cell) => cell.name === char);
      if (cell) {
        numberValue += Number(cell.value) || 0;
      }
    }
    return numberValue;
  };
  const handleChange = (name: string, value: string) => {
    let finalValue: string | number = parseInt(value);
    if (value.trim() === "") {
      finalValue = "";
    } else if (/[A-D]/.test(value)) {
      finalValue = computeDerivedValue(value);
    }

    setSheet((prevSheet) =>
      prevSheet.map((cell) =>
        cell.name === name ? { ...cell, value: finalValue.toString() } : cell
      )
    );
  };

  return (
    <>
      {sheet.map((singleSheetType: SheetType) => (
        <Cell
          key={singleSheetType.name}
          cellData={singleSheetType}
          onChange={handleChange}
        />
      ))}
    </>
  );
}

export default Sheet;

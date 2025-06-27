import { useEffect, useState } from "react";
import { SheetType } from "./Sheet";
import { useDebouncer } from "./useDebouncer";
interface CellProps {
  cellData: SheetType;
  onChange: (name: string, value: string) => void;
}

function Cell({ cellData, onChange }: CellProps) {
  const [cellValue, setCellValue] = useState<string>(cellData.value || "");

  const inputValue = useDebouncer(cellValue, 1000);
  useEffect(() => {
    setCellValue(cellData.value);
  }, [cellData]);

  useEffect(() => {
    onChange(cellData.name, inputValue);
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        placeholder="Formula Bar"
        style={{
          marginBottom: "10px",
          padding: "5px",
          fontSize: "16px",
        }}
        value={cellValue}
        onChange={(e) => setCellValue(e.target.value)}
      />
      <p>{cellValue}</p>
    </div>
  );
}

export default Cell;

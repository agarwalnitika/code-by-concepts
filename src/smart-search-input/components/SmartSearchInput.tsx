import { useState } from "react";

interface SmartSearchInputProps {
  onChange: (searchValue: string) => void;
}

function SmartSearchInput({ onChange }: SmartSearchInputProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <input
      type="text"
      onChange={handleChange}
      value={searchValue}
      aria-label="Search users"
      placeholder="Search by name"
    />
  );
}

export default SmartSearchInput;

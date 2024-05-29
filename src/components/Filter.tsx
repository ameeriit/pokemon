import React, { useEffect, useState } from "react";

interface FilterProps {
  onSearchChange: (searchTerm: string) => void;
}

export const Filter: React.FC<FilterProps> = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (searchTerm) {
      const params = new URLSearchParams(window.location.search);
      params.set("search", searchTerm);
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params}`
      );
    }
  }, [searchTerm]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <div className="py-8">
      <input
        id="search"
        className="w-80 rounded-full border-[1px] border-teal-600 border-solid pr-4 pl-6 py-2 focus:outline-none font-medium placeholder:font-medium"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

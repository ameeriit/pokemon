interface FilterProps {
  localSearchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Filter({ localSearchTerm, handleSearch }: FilterProps) {
  return (
    <div className="py-8">
      <input
        className="w-80 rounded-full border-[1px] border-teal-600 border-solid pr-4 pl-6 py-2 focus:outline-none font-medium placeholder:font-medium"
        type="text"
        placeholder="Search Pokémon..."
        value={localSearchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

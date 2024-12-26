interface FormProps {
  value: number
  onChange: (value: number) => void;
  onSubmit: () => void;
  error: string
}

export default function Form({ value, onChange, onSubmit, error }: FormProps) {
  return (
    <form className="flex flex-col items-center gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }} >
      <label htmlFor="input">Quantidade de água em ml:</label>
      <div className="flex gap-2">
        <span>
          <input
            type="number"
            id="input"
            value={value}
            className="text-black"
            onChange={(event) => onChange(Number(event.target.value))}
          />{" "}
          ml
        </span>
        <button type="submit">Adicionar água</button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

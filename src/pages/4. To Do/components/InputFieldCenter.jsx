export default function InputFieldCenter({
  placeholderValue,
  type,
  valueTyped,
  lengthMax,
  fieldProps,
}) {
  return (
    <div className="mt-4">
      <label className="block mb-2 font-medium text-left text-secondary-content">
        {fieldProps}
      </label>
      <input
        required
        maxLength={lengthMax}
        type={type}
        placeholder={placeholderValue}
        className="input input-bordered w-72 md:w-96 text-left text-base-content"
        onChange={(e) => {
          valueTyped(e.target.value);
        }}
      />
    </div>
  );
}

export default function InputField({
  placeholderValue,
  type,
  valueTyped,
  lengthMax,
  fieldProps,
}) {
  return (
    <div className="text-center text-base-content w-72 items-center">
      <div className="mt-4">
        <label className="block mb-2 text-m font-medium text-left text-base-content">
          {fieldProps}
        </label>
        <input
          required
          maxLength={lengthMax}
          type={type}
          placeholder={placeholderValue}
          className="input input-bordered w-full"
          onChange={(e) => {
            valueTyped(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

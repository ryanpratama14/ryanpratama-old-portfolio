export default function InputFieldCenter({
  placeholderValue,
  type,
  valueTyped,
  lengthMax,
  fieldProps,
}) {
  return (
    <div class="mt-4">
      <label class="block mb-2 text-m font-medium text-center text-primary-content">
        {fieldProps}
      </label>
      <input
        required
        maxLength={lengthMax}
        type={type}
        placeholder={placeholderValue}
        className="input input-bordered w-72 md:w-96 text-center"
        onChange={(e) => {
          valueTyped(e.target.value);
        }}
      />
    </div>
  );
}

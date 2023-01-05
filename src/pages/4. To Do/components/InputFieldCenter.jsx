export default function InputFieldCenter({
  placeholderValue,
  type,
  valueTyped,
  lengthMax,
  fieldProps,
}) {
  return (
    <div class="text-center text-base-content w-full items-center md:w-96 lg:w-96 xl:w-96 2xl:w-96">
      <div class="mt-4">
        <label class="block mb-2 text-m font-medium text-center text-primary-content">
          {fieldProps}
        </label>
        <input
          required
          maxLength={lengthMax}
          type={type}
          placeholder={placeholderValue}
          className="input input-bordered w-full text-center"
          onChange={(e) => {
            valueTyped(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

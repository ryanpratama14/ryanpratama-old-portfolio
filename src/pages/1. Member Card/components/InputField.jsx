export default function InputField({
  placeholderValue,
  type,
  valueTyped,
  lengthMax,
  fieldProps,
}) {
  return (
    <div class="text-center text-base-content w-96 items-center md:w-96 lg:w-96 xl:w-96 2xl:w-96">
      <div class="mt-4">
        <label class="block mb-2 text-m font-medium text-left text-base-content">
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

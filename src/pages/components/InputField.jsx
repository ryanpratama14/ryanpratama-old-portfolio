export default function InputField({
  placeholderValue,
  type,
  valueTyped,
  lengthMax,
  fieldProps,
}) {
  return (
    <div class="flex items-center justify-center">
      <div class="text-center text-black dark:text-white w-96 items-center">
        <div class="mt-4">
          <label class="block mb-2 text-sm font-medium text-left text-white dark:text-white">
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
    </div>
  );
}

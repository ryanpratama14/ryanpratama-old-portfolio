export default function InputFieldInt({
  placeholderValue,
  type,
  valueTyped,
  lengthMax,
  fieldProps,
}) {
  return (
    <div class="text-center text-black dark:text-white w-full items-center md:w-96 lg:w-96 xl:w-96 2xl:w-96">
      <div class="mt-4">
        <label class="block mb-2 text-m font-medium text-left text-white dark:text-white">
          {fieldProps}
        </label>
        <input
          required
          maxLength={lengthMax}
          type={type}
          placeholder={placeholderValue}
          className="input input-bordered w-full"
          onChange={(e) => {
            valueTyped(parseInt(e.target.value));
          }}
        />
      </div>
    </div>
  );
}

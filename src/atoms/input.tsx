type IProps = {
  containerClass?: string;
  inputClass?: string;
  labelClass?: string;
  label: string;
  filedName: string;
  type?: string;
  showLabel?: boolean;
  placeholder?: string;
  onChange?: (str: string) => void;
};
export function InputField({
  containerClass,
  inputClass,
  labelClass,
  label,
  filedName,
  type = 'text',
  showLabel = true,
  placeholder,
  onChange,
}: IProps) {
  return (
    <div className={containerClass}>
      {showLabel && (
        <label
          htmlFor={filedName}
          className={`block text-sm font-bold text-white ${labelClass}`}
        >
          {label}
        </label>
      )}
      <input
        onChange={(e) => onChange?.(e.target.value)}
        type={type}
        name={filedName}
        id={filedName}
        autoComplete={filedName}
        placeholder={placeholder}
        className={`mt-2 px-2 block h-[2.5rem] w-full shadow-inside bg-white sm:text-sm rounded ${inputClass}`}
      />
    </div>
  );
}

import { cn } from "@/src/lib/utils"

type FormFieldProps = React.ComponentProps<"input"> & {
  label: string
}

const FormField = ({ label, id, name, className, ...props }: FormFieldProps) => {
  const fieldId = id ?? name
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <label htmlFor={fieldId} className="font-satoshi text-sm font-medium leading-[1.2] text-shuttle-950">
        {label}
      </label>
      <input
        id={fieldId}
        name={name}
        className={cn(
          "h-13 w-full rounded-xl border border-shuttle-100 bg-white px-6 py-3 font-satoshi text-lg leading-[1.6] text-shuttle-950 outline-none transition-colors placeholder:text-shuttle-400 focus:border-purple",
          className
        )}
        {...props}
      />
    </div>
  )
}

export default FormField

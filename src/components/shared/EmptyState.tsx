type EmptyStateProps = {
  title: string
  message: string
}

const EmptyState = ({ title, message }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-3xl bg-shuttle-50 px-6 py-16 text-center">
      <p className="font-poppins text-xl font-semibold leading-7 text-shuttle-950">{title}</p>
      <p className="font-satoshi text-base leading-[1.6] text-shuttle-700">{message}</p>
    </div>
  )
}

export default EmptyState

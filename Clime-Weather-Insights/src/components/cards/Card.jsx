import clsx from "clsx"
function Card({children, title, className, childrenClassName}) {
  return (
    <div className={clsx('p-4 rounded-xl bg-linear-to-br from-card to-card/60 shadow-md flex flex-col gap-4', className)}>
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <div className={clsx(childrenClassName, 'animate-[fade-in_1s_ease-out_forwards]')}>{children}</div>
    </div>
  )
}

export default Card
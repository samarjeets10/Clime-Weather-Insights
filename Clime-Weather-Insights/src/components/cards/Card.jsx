import clsx from "clsx"
function Card({children, title, className, childrenClassName}) {
  return (
    <div className={clsx('p-4 rounded-xl bg-linear-to-br from-card to-card/60 shadow-md flex flex-col gap-4 border dark:border-none 2xl:h-full', className)}>
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <div className={clsx(childrenClassName, 'animate-[fade-in_1s_ease-out_forwards] 2xl:flex-1')}>{children}</div>
    </div>
  )
}

export default Card
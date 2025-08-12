import clsx from 'clsx'

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'prose dark:prose-invert',
        'prose-pre:overflow-x-auto',
        'prose-pre:whitespace-pre-wrap',
        'prose-pre:word-wrap-break-word',
        'prose-pre:max-w-full',
        'prose-pre:p-5', // More padding
      )}
      {...props}
    />
  )
}

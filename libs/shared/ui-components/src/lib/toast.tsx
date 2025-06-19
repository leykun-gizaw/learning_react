import { CircleCheckBig, CircleAlert, CircleX, Info } from 'lucide-react';
import clsx from 'clsx';

export function Toast({
  type = 'success',
}: {
  type?: 'success' | 'error' | 'warning' | 'information';
}) {
  const ToastStyles = {
    success: {
      background: 'bg-[rgb(236,253,245)]',
      title: 'text-[rgb(6,95,70)]',
      content: 'text-[rgb(6,95,70)]',
      icon: 'text-[rgb(52,211,153)]',
    },
    error: {
      background: 'bg-[rgb(254,242,242)]',
      title: 'text-[rgb(146,64,14)]',
      content: 'text-[rgb(180,83,9)]',
      icon: 'text-[rgb(248,113,113)]',
    },
    warning: {
      background: 'bg-[rgb(255,251,235)]',
      title: 'text-[rgb(146,64,14)]',
      content: 'text-[rgb(180,83,9)]',
      icon: 'text-[rgb(251,191,36,1)]',
    },
    information: {
      background: 'bg-[rgb(239,246,255)]',
      title: 'text-[rgb(30,64,175)]',
      content: 'text-[rgb(28,81,185)]',
      icon: 'text-[rgb(96,165,250)]',
    },
  };

  const ToastIcon = {
    success: <CircleCheckBig className={clsx(ToastStyles[type].icon)} />,
    error: <CircleX className={clsx(ToastStyles[type].icon)} />,
    warning: <CircleAlert className={clsx(ToastStyles[type].icon)} />,
    information: <Info className={clsx(ToastStyles[type].icon)} />,
  }[type];

  return (
    <div
      className={clsx(
        'flex',
        'rounded-lg',
        'gap-3',
        'p-5',
        'h-fit',
        'w-[25rem]',
        'shadow-lg',
        'shadow-black/10',
        ToastStyles[type].background || ToastStyles.success
      )}
    >
      {ToastIcon}
      <div>
        <h1 className={clsx(ToastStyles[type].title, 'font-[500]')}>
          {type[0].toUpperCase() + type.slice(1)}
        </h1>
        <p className={clsx(ToastStyles[type].content, 'font-light')}>
          Toast to show on {type} action
        </p>
      </div>
    </div>
  );
}

export default Toast;

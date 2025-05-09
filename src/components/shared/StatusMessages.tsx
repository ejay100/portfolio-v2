export function LoadingSpinner() {
  return (
    <div className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent" />
  );
}

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="text-red-600 dark:text-red-400 text-sm mt-2">
      {message}
    </div>
  );
}

interface SuccessMessageProps {
  message: string;
}

export function SuccessMessage({ message }: SuccessMessageProps) {
  return (
    <div className="text-green-600 dark:text-green-400 text-sm mt-2">
      {message}
    </div>
  );
}

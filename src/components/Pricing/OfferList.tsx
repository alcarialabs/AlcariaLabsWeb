const OfferList = ({
  text,
  status,
  featured,
}: {
  text: string;
  status: "active" | "inactive";
  featured?: boolean;
}) => {
  return (
    <div className="mb-4 flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
          status === "active"
            ? featured
              ? "bg-[#FF4F00]/20 text-[#FF4F00]"
              : "bg-[#0344DC]/10 text-[#0344DC]"
            : featured
              ? "bg-white/10 text-white/30"
              : "bg-gray-100 text-gray-300 dark:bg-white/5 dark:text-white/20"
        }`}
      >
        {status === "active" ? (
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </span>
      <p
        className={`text-sm font-medium ${
          status === "active"
            ? featured
              ? "text-white/90"
              : "text-[#01203F] dark:text-white"
            : featured
              ? "text-white/35"
              : "text-gray-400 dark:text-white/30"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default OfferList;

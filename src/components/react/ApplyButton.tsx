interface ApplyButtonProps {
  label: string;
  buttonType?: string;
}

export function ApplyButton({ label, buttonType = "apply" }: ApplyButtonProps) {
  return (
    <a
      href="#info"
      className="btn-apply relative inline-flex items-center justify-center min-w-[200px]"
      data-button={buttonType}
      aria-label="Apply to 3x10"
    >
      <span className="absolute inset-0 z-10 flex items-center justify-center font-sans text-[#132318] text-[22px] px-8 py-2 whitespace-nowrap">
        {label}
      </span>
      <span className="flex flex-col items-center justify-center">
        <span className="bg-[#dfff5c] w-[180px] h-[8px]"></span>
        <span className="bg-[#dfff5c] w-[200px] h-[48px]"></span>
        <span className="bg-[#dfff5c] w-[180px] h-[8px]"></span>
      </span>
    </a>
  );
}

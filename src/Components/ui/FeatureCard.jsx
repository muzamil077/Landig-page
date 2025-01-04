export function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-[32px] bg-white border border-[#D4D2E3] h-auto w-full  md:w-[289px] p-8 shadow-sm text-center">
      <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-[#fff3eb]">
        <span className="h-10 w-10  flex items-center justify-center font-medium">{icon}</span>
      </div>
      <h3 className="mb-3 text-2xl font-semibold text-[#1C264E]">{title}</h3>
      <p className="text-[18px]  text-muted-foreground font-medium leading-8  text-[#434343]">
        {description}
      </p>
    </div>
  );
}

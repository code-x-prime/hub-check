import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  svgPath?: string;
  index: number;
}

export function FeaturesSectionWithHoverEffects({
  features,
}: {
  features: Array<{ title: string; desc: string; svgPath?: string; icon?: React.ReactNode }>;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature
          key={feature.title}
          title={feature.title}
          description={feature.desc}
          icon={feature.icon}
          svgPath={feature.svgPath}
          index={index}
        />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  svgPath,
  index,
}: FeatureProps) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-200/60 dark:border-neutral-800",
        (index % 3 === 0) && "lg:border-l border-gray-200/60 dark:border-neutral-800",
        "lg:border-b border-gray-200/60 dark:border-neutral-800"
      )}
    >
      {/* Hover background gradients */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-orange-500/[0.03] to-transparent pointer-events-none" />
      
      <div className="mb-4 relative z-10 px-10">
        {svgPath ? (
          <div className="h-10 w-10 relative overflow-hidden flex items-center justify-center bg-orange-50 rounded-lg p-2">
            <Image src={svgPath} alt={title} fill className="object-contain p-1.5" />
          </div>
        ) : (
          <div className="text-neutral-600 dark:text-neutral-400">
            {icon}
          </div>
        )}
      </div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        {/* Hover side border in orange */}
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-200 dark:bg-neutral-700 group-hover/feature:bg-[#ff6b00] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 leading-relaxed font-sans font-light">
        {description}
      </p>
    </div>
  );
};

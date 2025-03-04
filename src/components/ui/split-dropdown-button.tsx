"use client";

import type * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface SplitDropdownButtonProps {
  label: string;
  icon?: React.ReactNode;
  options: {
    label: string;
    value: string;
    onClick?: () => void;
  }[];
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg";
  className?: string;
  onSelect?: (value: string) => void;
  onClick?: () => void;
}

export function SplitDropdownButton({
  label,
  icon,
  options,
  variant = "default",
  size = "default",
  className,
  onSelect,
  onClick,
}: SplitDropdownButtonProps) {
  const handleSelect = (value: string, optionOnClick?: () => void) => {
    onSelect?.(value);
    optionOnClick?.();
  };

  return (
    <div className="flex">
      <Button
        variant={variant}
        size={size}
        className={`rounded-r-none ${className}`}
        onClick={onClick}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </Button>
      <Separator orientation="vertical" className="h-full" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={variant}
            size={size}
            className={`rounded-l-none px-2 ${className}`}
            aria-label="Show options"
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => handleSelect(option.value, option.onClick)}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

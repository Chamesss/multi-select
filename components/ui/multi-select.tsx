"use client";

import * as React from "react";

import { Check, ChevronsUpDown, X } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Skeleton } from "@/components/ui/skeleton";

interface MultiSelectProps {
  options:
    | {
        label: string;
        value: string;
      }[]
    | undefined;
  value: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  className?: string;
  isLoading?: boolean;
}

export default function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Select items...",
  className,
  isLoading = false,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleUnselect = (item: string) => {
    onChange(value.filter((i) => i !== item));
  };

  const handleSelect = (item: string) => {
    if (value.includes(item)) {
      handleUnselect(item);
    } else {
      onChange([...value, item]);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="w-full">
          <div className="flex h-12 flex-row cursor-pointer rounded-md border border-input justify-between items-stretch">
            <div
              className="flex flex-nowrap hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-neutral-100 overflow-x-auto overflow-y-hidden px-2.5 py-1.5 gap-1 flex-1"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "hsl(var(--border)) transparent",
              }}
              onScroll={(e) => {
                const target = e.target as HTMLElement;
                target.style.setProperty("--webkit-scrollbar-width", "4px");
                target.style.setProperty(
                  "--webkit-scrollbar-track-background",
                  "transparent"
                );
                target.style.setProperty(
                  "--webkit-scrollbar-thumb-background",
                  "hsl(var(--border))"
                );
                target.style.setProperty(
                  "--webkit-scrollbar-thumb-border-radius",
                  "2px"
                );
              }}
            >
              {value.length === 0 ? (
                <span className="text-muted-foreground h-fit my-auto truncate">
                  {placeholder}
                </span>
              ) : (
                value.map((item) => {
                  const option = options?.find((opt) => opt.value === item);
                  return (
                    <Badge
                      key={item}
                      variant="default"
                      className="text-xs h-fit py-0 my-auto"
                    >
                      {option?.label}
                      <button
                        className="ml-1 py-1.5 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer text-muted-foreground dark:!text-neutral-800 dark:hover:!text-red-600 hover:!text-red-600"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleUnselect(item);
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUnselect(item);
                        }}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  );
                })
              )}
            </div>
            <div className="flex items-center justify-center dark:hover:bg-white/5 hover:bg-black/5 p-1">
              <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="w-full h-fit p-0 z-[9999] rounded-sm"
          align="start"
        >
          <Command>
            <CommandInput placeholder="Search items..." />
            <CommandList>
              <CommandEmpty className="p-0">
                {isLoading ? (
                  Array.from({ length: 6 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      className="h-[15px] mx-auto w-[93%] rounded-sm my-2"
                    />
                  ))
                ) : (
                  <div className="text-center text-xs py-2 mt-1.5 w-full mx-auto">
                    No items found.
                  </div>
                )}
              </CommandEmpty>
              <CommandGroup>
                {options?.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value.includes(option.value)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

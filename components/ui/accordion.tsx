"use client";
import * as A from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
export const Accordion = A.Root;
export const AccordionItem = ({ className, ...p }: React.ComponentProps<typeof A.Item>) => <A.Item className={cn("border-b border-ink/10", className)} {...p} />;
export const AccordionTrigger = ({ className, children, ...p }: React.ComponentProps<typeof A.Trigger>) => (
  <A.Header className="flex"><A.Trigger className={cn("flex flex-1 items-center justify-between gap-4 py-5 text-left text-lg font-semibold outline-none focus-visible:ring-2 focus-visible:ring-violet [&[data-state=open]>svg]:rotate-180", className)} {...p}>{children}<ChevronDown className="size-5 shrink-0 text-violet transition-transform" /></A.Trigger></A.Header>
);
export const AccordionContent = ({ className, children, ...p }: React.ComponentProps<typeof A.Content>) => (
  <A.Content className="overflow-hidden" {...p}><div className={cn("max-w-2xl pb-5 text-ink/70", className)}>{children}</div></A.Content>
);

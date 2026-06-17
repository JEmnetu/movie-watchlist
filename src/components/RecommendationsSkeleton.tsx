import React from "react";
import { Card, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function RecommendationsSkeleton() {
  return (
    <div className="flex items-start gap-x-4 overflow-x-auto pt-4 pb-12 px-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card
          key={i}
          className="w-72 shrink-0 ring-0 shadow-lg p-0 gap-0 overflow-hidden"
        >
          <Skeleton className="aspect-video w-full" />
          <CardHeader className="p-4">
            <Skeleton className="h-4 w-3/4" />
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

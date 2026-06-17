import React from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function CastSkeleton() {
  return (
    <div>
      <div className="font-semibold text-xl mt-4 px-4">Top Billed Cast</div>
      <div className="flex gap-3 overflow-x-auto pb-4 px-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card
            key={i}
            className="w-40 shrink-0 shadow-lg [--card-spacing:--spacing(3)]"
          >
            <Skeleton className="aspect-2/3 w-full rounded-md" />
            <CardHeader>
              <Skeleton className="h-4 w-3/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-3 w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

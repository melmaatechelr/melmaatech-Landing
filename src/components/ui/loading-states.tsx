import React from 'react';
import { Skeleton } from './skeleton';
import { Card, CardContent, CardHeader } from './card';

export const ServiceCardSkeleton = () => (
  <Card className="p-6">
    <CardHeader className="pb-4">
      <Skeleton className="h-12 w-12 rounded-full mb-4" />
      <Skeleton className="h-6 w-3/4" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-4" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-14 rounded-full" />
      </div>
    </CardContent>
  </Card>
);

export const HeroSkeleton = () => (
  <div className="pt-32 pb-20 md:pb-32">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <Skeleton className="h-16 w-full mb-6" />
        <Skeleton className="h-6 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-4 w-full mb-10" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-36" />
        </div>
      </div>
    </div>
  </div>
);

export const ContactFormSkeleton = () => (
  <Card className="p-8">
    <Skeleton className="h-8 w-48 mx-auto mb-6" />
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div>
        <Skeleton className="h-4 w-16 mb-2" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div>
        <Skeleton className="h-4 w-20 mb-2" />
        <Skeleton className="h-32 w-full" />
      </div>
      <Skeleton className="h-12 w-full" />
    </div>
  </Card>
);

export const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);
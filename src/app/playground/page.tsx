"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const page = () => {
  return (
    <div className="w-full mt-6">
      <h2 className="text-center">Component Playground</h2>
      <div className="flex">
        <div className="w-1/3 text-center">
          <Button onClick={() => alert("Test")}>Button</Button>
          <Button variant="destructive">Button</Button>
          <Button>Button</Button>
        </div>
        <div className="w-1/3">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardDescription>Lorem Ipsum</CardDescription>
            <Button variant="link">Sign In</Button>
          </Card>
        </div>
        <div className="w-1/3 text-center">
          <Select>
            <SelectTrigger className="w-full max-w-48">
              <SelectValue placeholder="Select ..." />
            </SelectTrigger>
            <SelectGroup>
              <SelectContent>
                <SelectLabel>Options</SelectLabel>
                <SelectItem value="First">First</SelectItem>
                <SelectItem value="Second">Second</SelectItem>
              </SelectContent>
            </SelectGroup>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default page;

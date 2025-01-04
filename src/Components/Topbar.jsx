import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function TopBar() {
  return (
    <header className="sticky flex justify-center items-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" container mx-auto flex items-center justify-between py-4  w-full">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <span className="font-bold">Vaishakhi Matrimony</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div>
          <nav className="hidden lg:flex items-center space-x-10">
            <Link
              href="/"
              className="font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="Sections/FeaturSection"
              className="font-medium transition-colors hover:text-primary"
            >
              Success Stories
            </Link>
            <Link
              href="/pricing"
              className="font-medium transition-colors hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Button variant="ghost">Login</Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
            Get started
          </Button>
        </div>

        {/* Mobile Navigation */}
      </div>
      <div className="bg-white">
        <Sheet>
          <SheetTrigger asChild className=" block md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex  p-4 h-screen flex-col space-y-4 ">
              <Link
                href="/"
                className="font-medium transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="sections/AboutSection"
                className="font-medium transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/FeaturSection"
                className="font-medium transition-colors hover:text-primary"
              >
                Success Stories
              </Link>
              <Link
                href="/pricing"
                className="font-medium transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="font-medium transition-colors hover:text-primary"
              >
                Contact
              </Link>
              <Button variant="ghost" className="justify-start px-0">
                Login
              </Button>
              <Button className="bg-[#FF7A3D] hover:bg-[#ff6a24]">
                Get started
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

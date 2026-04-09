
import { SignInButton, SignUpButton, UserButton , SignedIn,SignedOut } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Cookie, Refrigerator } from "lucide-react";
import UserDropdown from "./UserDropdown";
import { checkUser } from "@/lib/checkUser";


const Header = async() => {
const user = await checkUser();
  return <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50 support-backdrop-blur:bg-stone-50/60">
    <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href={user ? "/dashboard" : "/"}
          className="flex items-center gap-2 group"
        >
          <Image
            src="/orange-logo.png"
            alt="Servd Logo"
            width={60}
            height={60}
            className="w-16"
          />
        </Link>

        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
          <Link
            href="/recipes"
            className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
          >
            <Cookie className="w-4 h-4" />
            My Recipes
          </Link>
          <Link
            href="/pantry"
            className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
          >
            <Refrigerator className="w-4 h-4" />
            My Pantry
          </Link>
        </div>



        <div className="flex items-center gap-4">
                <SignedIn>
                    {/* how to cook */}
                    
                    <UserDropdown />
                </SignedIn>

            <SignedOut>
                <SignInButton mode="modal">
                    <Button
                    variant="ghost"
                    className="text-stone-600 hovee:text-orange-600 hover:bg-orange-50 font-medium">
                        Sign in
                    </Button>
                </SignInButton>

                <SignUpButton mode="modal">
                    <Button
                    variant="primary"
                    className="rounded-full px-6">
                        Get Started
                    </Button>
                </SignUpButton>
            </SignedOut>



        </div>
    </nav>
  </header>;  
};

export default Header;
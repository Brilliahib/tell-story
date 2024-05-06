import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  const { userId } = auth();
  console.log(userId);
  return (
    <>
      <div className="w-full bg-blue-700 py-4 text-white">
        <div className="px-8 flex justify-between">
          <div>
            <h1 className="font-bold text-xl uppercase">TELLSTORY</h1>
          </div>
          <div className="flex gap-x-4">
            {!userId && (
              <>
                <a href="/sign-in">Sign In</a>
                <a href="/sign-up">Sign Up</a>
              </>
            )}
            <UserButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

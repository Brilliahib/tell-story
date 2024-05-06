import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <>
      <section>
        <div className="flex h-screen justify-center items-center">
          <SignIn />
        </div>
      </section>
    </>
  );
};

export default SignInPage;

import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className=" h-[90vh] flex items-center justify-center bg-slate-800 text-white">
        <section className="px-5 w-full flex flex-col justify-center items-center gap-7 py-10">
          <h1 className="text-5xl lg:text-[4rem] font-semibold text-center">
            Securely Manage Your Passwords with Ease
          </h1>
          <p className="text-md text-center w-3/4">
            Welcome to SecureStore, the ultimate solution for managing and
            safeguarding your digital life. Say goodbye to forgotten passwords
            and insecure practices. Our state-of-the-art password manager
            provides a simple, secure, and intuitive way to keep all your
            credentials in one safe place. Experience seamless password
            generation, storage, and autofill across all your devices, backed by
            robust encryption and cutting-edge security features. Stay in
            control of your digital identity with SecureStore.
          </p>
          <Link
            href="/api/auth/signin?callbackUrl=%2Fhomepage"
            className="text-slate-900 bg-white px-4 py-2 rounded-sm cursor-pointer"
          >
            Get started
          </Link>
        </section>
      </main>
    </>
  );
}

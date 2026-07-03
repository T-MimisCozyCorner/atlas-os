import Link from "next/link";
import { signUp } from "../actions";

export default function SignUpPage({ searchParams }: { searchParams: { message?: string } }) {
  return (
    <main className="grid min-h-screen place-items-center p-6">
      <div className="card w-full max-w-md">
        <h1 className="text-3xl font-black">Create your ATLAS OS account</h1>
        <p className="mt-2 text-slate-400">Start saving products, businesses, and tasks to your own database.</p>
        {searchParams.message && <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">{searchParams.message}</div>}
        <form action={signUp} className="mt-6 space-y-4">
          <input className="input" name="email" type="email" placeholder="Email" required />
          <input className="input" name="password" type="password" placeholder="Password" required minLength={6} />
          <button className="btn-primary w-full" type="submit">Create Account</button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-400">Already have an account? <Link className="text-atlasTeal" href="/auth/login">Log in</Link></p>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex justify-center items-center h-dvh flex-col gap-4">
        <div className="flex justify-center items-center text-xl">
          <div>
            <span className="mx-3">404|</span>Page Not Found
          </div>
        </div>
        <Link href="/" className="hover:underline hover:text-blue-500">
          Return Home
        </Link>
      </div>
    </>
  );
}

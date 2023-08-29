import Link from "next/link";

export default async function Home() {
  return (
    <div className="">
      <div>home</div>
      <Link href="/profile">
        <div>Profile</div>
      </Link>
    </div>
  );
}

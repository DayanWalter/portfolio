import Link from "next/link";

export default function Footer() {
  return (
    // Container
    <footer role="contentinfo" className="grid justify-center pt-40">
      {/* Content */}
      <div className="border-t p-4 md:max-w-7xl">
        <p className="text-center">
          <Link
            href="https://opensource.org/license/mit"
            target="_blank"
            className=""
          >
            {" "}
            &copy; {new Date().getFullYear()} Dayan Walter - This project is
            licensed under the MIT License.
          </Link>
        </p>
      </div>
    </footer>
  );
}

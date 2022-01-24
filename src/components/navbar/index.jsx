import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a>User</a>
            </Link>
          </li>
          <li>
            <Link href="/post">
              <a>Post</a>
            </Link>
          </li>
          <li>
            <Link href="/docs/123">
              <a>Docs</a>
            </Link>
          </li>
          {!session ? (
            <li>
              <Link href="/api/auth/signin">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Sign In
                </a>
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/api/auth/signout">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign Out
                </a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;

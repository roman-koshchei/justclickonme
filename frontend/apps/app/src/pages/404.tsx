import { GetStartedFooter, NavFooter, Navbar } from "../components/nav"
import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { routes } from "../shared/utils/helpers"

const Error404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page wasn&apos;t found | Just Click On Me</title>
        <meta name="description" content="Shorten and customize your URLs with Just Click On Me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div className="h-[75vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl lg:text-7xl  font-bold max-w-6xl">
            Link not found.
            <br />
            Want to create own one?
          </h1>
          <div className="flex border-2 border-white rounded-[0.625rem] items-center pl-6 pr-2 w-full max-w-2xl mt-10">
            <span className=" font-medium">justclickon.me/</span>
            <input
              type="text"
              className="font-medium bg-transparent py-5 flex-1"
              placeholder="yourlink"
            />
            <Link
              href={routes.manage}
              className="py-3 px-5 bg-slate-900 rounded-[0.625rem] outline-none sm:block hidden"
            >
              GET MEMORABLE LINK
            </Link>
          </div>
          <Link
            href={routes.manage}
            className="py-3 px-5 bg-slate-900 rounded-[0.625rem] outline-none sm:hidden mt-8"
          >
            GET MEMORABLE LINK
          </Link>
        </div>

        <GetStartedFooter />
        <NavFooter />
      </main>
    </>
  )
}

export default Error404

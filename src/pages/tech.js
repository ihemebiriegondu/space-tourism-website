import React from "react";
import PageHeader from "../components/pageHeader";

export default function Tech() {
  return (
    <main className="lg:bg-techbg-desktop md:bg-techbg-tablet bg-techbg-mobile pb-12 text-white bg-no-repeat bg-cover lg:bg-center min-h-screen w-full font-barlowCondensed">
      <section className="lg:pt-48 md:pt-36 pt-28 2xl:px-40 xl:px-32 lg:px-20 sm:px-10 px-6">
        <PageHeader no={"03"} content={"SPACE LAUNCH 101"} speed={30} />
      </section>
    </main>
  );
}

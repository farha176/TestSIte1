//import {Card}  from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';
export default async function Page() {
  const revenue = await fetchRevenue();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        { <RevenueChart revenue={revenue}  /> }
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}








// import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import { lusitana } from '@/app/ui/fonts';
// import Image from 'next/image';
 
// export default function Page() {
//   return (
//     // ...
//     <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
//       {/* Add Hero Images Here */}
//       <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
//         <AcmeLogo />
//         {/* ... */}
//       </div>
//       <p
//       className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
//     >
//       <strong>Welcome to Acme.</strong> This is the example for the{' '}
//       <a href="https://nextjs.org/learn/" className="text-blue-500">
//         Next.js Learn Course
//       </a>
//       , brought to you by Vercel.
//     </p>
//       <Image
//         src="/hero-desktop.png"
//         width={1000}
//         height={760}
//         className="hidden md:block"
//         alt="Screenshots of the dashboard project showing desktop version"
//       />
//     </div>
//     //...
//   );
// }
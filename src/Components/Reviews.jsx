import Image from 'next/image'
import React from 'react'

export default function Reviews() {
    return (
        <section className="w-full max-w-6xl mx-auto py-10 px-10 md:px-0">
            <h2 className="  text-xl font-bold leading-tight tracking-[-0.015em]  pb-4 pt-5">
                What Our Customers Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">

                {/* Card 1 */}
                <div className="bg-white dark:bg-neutral-800/50 p-6 rounded-lg shadow-sm">
                    

                    <p className="text-neutral-600 dark:text-neutral-100/70 mb-4 italic">
                        Absolutely love the quality of the products! My order arrived quickly and the customer service was fantastic. Will definitely be shopping here again.
                    </p>

                    <div className="flex items-center gap-3">
                        <Image
                            width={100}
                            height={100}
                            className="size-10 rounded-full"
                            alt="Avatar of Sarah J."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkzoOwCY0IH9OjdT0gyCGlpOBOzZB9l1JgzyAIGHRA1puivqxUn2qgOsW6eta0s_4xWwLi4OgfTT_RV9Oyeqh6wZEVttkmRFsQYriXgxa6IPA87nUpCLlQxLbkKNJwbB6OySYgGLvhvay-cnbBiCTUT355OnyKJDzMHXiMxFtzJJQzmT94XORI8bt2jWyw1EZiAK0R7j2A9V4Hq5Brq6BQz4EOgbR7IDrpoWdIsuH6oGGF_eAEU-Ow_KVl2KBiGo26ZZNfTXxtPPb2"
                        />
                        <div>
                            <p className="font-semibold text-neutral-800 dark:text-neutral-100">
                                Sarah J.
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-100/70">
                                Verified Buyer
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white dark:bg-neutral-800/50 p-6 rounded-lg shadow-sm">
                    

                    <p className="text-neutral-600 dark:text-neutral-100/70 mb-4 italic">
                        Great selection of modern and stylish items. The website is easy to navigate, and I found exactly what I was looking for. Highly recommend.
                    </p>

                    <div className="flex items-center gap-3">
                        <Image
                            width={100}
                            height={100}
                            className="size-10 rounded-full"
                            alt="Avatar of Michael B."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp7xa_qO1vkcVhqDMcqbazntG8VgDU307EcXapjVENxWo0CdKDIhojKlYP_gDwcYA0BNTW9FgrZuvrNYNSogGi05FCWnH5iFejh-P60bGpDFdEv8pqgrKe5J3MOx8ln5vPPGNVXYgrudWK_68YQsHOQg8UIjROH05zAfo3gMFDPPiXe-EsJNYi-JXHoUZcslbiw5h7H_HFd4GXYmVFZpME2HDdX4uj3LU5kjk7v4UTt0kkcWIuyhiv3eHXtYQu49YBf7kBvRcVTPCW"
                        />
                        <div>
                            <p className="font-semibold text-neutral-800 dark:text-neutral-100">
                                Michael B.
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-100/70">
                                Verified Buyer
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white dark:bg-neutral-800/50 p-6 rounded-lg shadow-sm">
                    

                    <p className="text-neutral-600 dark:text-neutral-100/70 mb-4 italic">
                        My new favorite online store! The tote bag I bought is even more beautiful in person. The attention to detail is amazing.
                    </p>

                    <div className="flex items-center gap-3">
                        <Image
                            width={100}
                            height={100}
                            className="size-10 rounded-full"
                            alt="Avatar of Emily R."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfDWYOaPLdAIdElqXfowCbmPX9Q04WeNmyRMsRxVX_asJ0ymvyhvYWJO_N3l3Wa05j4tn1NO8TyF78xsnHDw41uJ42BuAUHShcNyn4prjIIO2kuLhg340i5n6JTYsO51EtkO4krxi1zJlkmELRZXDouTYVmZ42foHWoZu6OI1SXmILflmIZ8MufzpZHJzNPvPuVBghG6f5nf0pnl83ONrpckW3IIbQqiEjEX8g5QC1MWM8Fp0lE6U4KYNVdtCqbzcltuWRA7AjS82U"
                        />
                        <div>
                            <p className="font-semibold text-neutral-800 dark:text-neutral-100">
                                Emily R.
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-100/70">
                                Verified Buyer
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

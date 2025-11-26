import Image from 'next/image'
import React from 'react'

export default function Team() {
    return (
        <section className="w-full max-w-6xl mx-auto py-10 px-10 md:px-0">
            <h2 className=" text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 pt-5 ">
                The People Behind the Brand
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

                {/* Person 1 */}
                <div className="flex flex-col items-center text-center">
                    <Image
                        width={100}
                        height={100}
                        alt="Headshot of Jane Doe"
                        className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGx-nXp0W6mBF36OjIOUyuT1SMAlLDpRKgS-fpedXHn1EJw6bXXwJd5DGz6PduwSsUTu7RqJgdaJD_YlqOJDoSHi8PaO7edLYLA4xDHsPiCCZxleZrtO01VnxhkD__z0adbv9Orf5VDNNyiY6vF6j_oWNDzIWUcJ2lAIMxrxX1bounjBgJql3WTeVeNDPGq5_ROwTWzpwSziHHNZWujsN35xs7EYsW_ek5ke-5_DG4N0k6KQqeBT1qrw-fVMjGZGTtcxHoAa1MZBAS"
                    />
                    <h3 className="text-lg font-bold ">
                        Jane Doe
                    </h3>
                    <p className="text-primary text-sm font-medium">Founder &amp; CEO</p>
                </div>

                {/* Person 2 */}
                <div className="flex flex-col items-center text-center">
                    <Image
                        width={100}
                        height={100}
                        alt="Headshot of John Smith"
                        className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjmOTNgfUPCcP_SHOQDME60avq9WIFdZhj_BzhzAukQVfaqUoRw33zg298KvIvJdJGF3XqRuR0nj4YKdAtMht0CxMF2_4Heta0YXFLWSz7DclhCOW_hMZakUj8a4usZmSOQQqT_keFxKUX2hElrv8rhggsqUCQx2TaHfAwuJ9Scf5FPlqpH3FEluWVDWeJW3mqZOUOk5cj-3gglE4xPpOpf4f_heyduPPvl3HV-0a9hKpep63iQi8Ot0uo1o2sYtmELtxrq6TaoTGg"
                    />
                    <h3 className="text-lg font-bold ">
                        John Smith
                    </h3>
                    <p className="text-primary text-sm font-medium">Lead Designer</p>
                </div>

                {/* Person 3 */}
                <div className="flex flex-col items-center text-center">
                    <Image
                        width={100}
                        height={100}
                        alt="Headshot of Emily White"
                        className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTwUgaUc68OamYAtXPEN4hGoQQC9aS1FhUULOa7C-f3mCuDYAIdgYlmdS0HM4CTL8taa-yUYbNuC2CpqSZUP9CSHc6UyFsz9ywyc8cIEVpn51zrAbVCIk5hxpGE1wGoNNTY4VBalzWtsilTLNKnczmORit5NUkYWQ0x1C2_9OhfOLRJaYWBPhPDvn4MoVWHsU0bueVVjH-T_19E5atS142Xh-Ehxj7_cY-LNF3bCVIu-39RDaYxd-ayTyID61US332TrBt9fz1Xmq-"
                    />
                    <h3 className="text-lg font-bold ">
                        Emily White
                    </h3>
                    <p className="text-primary text-sm font-medium">Head of Operations</p>
                </div>

            </div>
        </section>

    )
}

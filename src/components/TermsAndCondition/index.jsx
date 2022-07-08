import React from 'react'
import { ImCross } from 'react-icons/im'

function TermsAndCondition({ setPopupTerms }) {
    return (
        <div className="terms-popup-wrapper z-10 bg-white flex justify-center items-center">
            <div className="terms-popup  px-14 py-8 sm:py-5 sm:px-10  flex justify-center items-center">
                <ImCross className="absolute top-5 right-5 block font-bold cursor-pointer hover:text-black text-red" onClick={() => setPopupTerms(false)} />

                <ul className="list-disc font-epilogue text-sm text-black">
                    <span className="text-lg font-semibold">Terms and Conditions</span>
                    <li>
                        Every time your family/ friends sign up with your shared referral
                        link and becomes a new RuDo member by setting up a RuDo Wealth
                        account in accordance with the below eligibility criteria, you and
                        your friend will get AED50 in your RuDo Wealth accounts.
                        Eligibility
                    </li>
                    <li>
                        Referral codes must be used during the early sign up and
                        on-boarding process, and cannot be added retroactively.
                    </li>
                    <li>
                        Only when your friend funds his/her account with the minimum
                        investment of AED20 into their portfolio, the referral amount will
                        be added to both of your accounts within 30 days.
                    </li>
                    <li>
                        Clients who receive a referral bonus must keep it in their account
                        for 90 days, otherwise it may be deducted from their final
                        withdrawal amount.
                    </li>
                    <li>
                        The referral program is available exclusively to those who are
                        residing in the UAE.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TermsAndCondition

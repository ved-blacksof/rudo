import trophy from "./svgs/trophy.png";
import chevronLeft from "./svgs/chevronDesktop.svg";
import { useFormContext } from "../../context/index";

const FormProgress = ({ prevHandler, elemRef }) => {
  const { ansData, stage } = useFormContext();
  return (
    <div className="fixed bottom-0 left-0 right-0  progress-indicator gap-3 z-[15] mt-auto">
      {stage === 2 && Object.keys(ansData).length > 0 && (
        <div className="bg-formBg  px-3 xl:py-4 hidden lg:block">
          <div className=" z-[20] w-full px-2 pt-1 pb-2 md:w-10/12  max-w-screen-xl mx-auto">
            <button onClick={prevHandler} ref={elemRef}>
              <img src={chevronLeft} alt="arrow-left" />
            </button>
          </div>
        </div>
      )}
      <div className=" bg-white py-2 xl:py-4">
        <div className=" bg-white flex flex-wrap justify-between px-2 items-end  md:w-10/12  max-w-screen-lg mx-auto">
          <div className=" grid place-content-start font-epilogue ">
            <span className="xl:text-lg  uppercase text-sm  min-w-full">
              YOUR PROGRESS
            </span>
            <span className=" text-lg font-semibold  lg:text-2xl xl:text-3xl font-epilogue capitalize">
              {"0" + Object.keys(ansData).length} /09 Completed
            </span>
          </div>
          {/* <div className="flex flex-nowrap items-center gap-1  ">
            <img src={trophy} alt="" className="mr-2" />
            <span className=" text font-semibold pt-2 pb-1  whitespace-nowrap xl:text-xl font-epilogue capitalize">
              1 year free subscription
            </span>
          </div> */}
        </div>
      </div>
      <div className=" bg-white py-3 px-3">
        <div className=" relative md:w-10/12  max-w-screen-lg mx-auto xl:h-6 h-4 rounded-full bg-gradient-to-r from-green to-footerBg flex items-center">
          <svg
            style={{ left: (Object.keys(ansData).length / 9) * 100 + "%" }}
            className="xl:h-16 xl:w-16 h-12 w-12 -mt-4 absolute transition-all duration-200"
            viewBox="0 0 52 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1041_10202)">
              <g filter="url(#filter0_ii_1041_10202)">
                <path
                  d="M46.5945 41.5824L31.4005 63.0999C30.1248 64.902 28.0536 65.9728 25.8458 65.9728C23.6379 65.9728 21.5667 64.902 20.291 63.0999L5.09697 41.5824C1.52506 36.647 -0.23737 30.6315 0.106785 24.549C0.45084 18.4664 2.87985 12.688 6.98537 8.18693C10.2284 4.75617 14.3457 2.27482 18.8939 1.00986C23.4426 -0.25459 28.2494 -0.25459 32.7981 1.00986C37.3463 2.27482 41.4636 4.75617 44.7067 8.18693C48.8177 12.6901 51.25 18.4727 51.5941 24.5603C51.9382 30.6475 50.1729 36.6673 46.5951 41.605L46.5945 41.5824Z"
                  fill="#FFD459"
                />
              </g>
              <circle
                cx="25.8503"
                cy="26.1179"
                r="21.5242"
                fill="url(#paint0_radial_1041_10202)"
              />
              <circle
                cx="25.8503"
                cy="26.1179"
                r="21.5242"
                fill="url(#paint1_radial_1041_10202)"
              />
              <circle
                cx="25.8503"
                cy="26.1179"
                r="21.5242"
                fill="url(#paint2_radial_1041_10202)"
              />
              <g filter="url(#filter1_f_1041_10202)">
                <circle
                  cx="25.8503"
                  cy="26.1183"
                  r="20.6192"
                  fill="url(#paint3_radial_1041_10202)"
                  fillOpacity="0.2"
                />
              </g>
              <g filter="url(#filter2_d_1041_10202)">
                <g filter="url(#filter3_f_1041_10202)">
                  <path
                    d="M26.924 8.73243L26.7778 21.706C26.7714 22.2693 27.4499 22.5584 27.8518 22.1637L37.2118 12.9701C37.5645 12.6237 37.5907 12.0668 37.2533 11.7054C36.3715 10.7611 34.6328 9.0537 33.0437 8.40863C31.4689 7.76933 29.0521 7.77191 27.7814 7.8273C27.2978 7.84838 26.9294 8.24843 26.924 8.73243Z"
                    fill="url(#paint4_linear_1041_10202)"
                  />
                  <path
                    d="M38.5387 14.6485L29.5768 24.0304C29.1876 24.4377 29.4862 25.1122 30.0494 25.098L43.165 24.7675C43.6592 24.7551 44.0586 24.366 44.0586 23.8716C44.0587 22.5795 43.9533 20.145 43.2323 18.5889C42.5177 17.0468 40.7496 15.3991 39.7831 14.5723C39.4153 14.2576 38.873 14.2985 38.5387 14.6485Z"
                    fill="url(#paint5_linear_1041_10202)"
                  />
                  <path
                    d="M42.7478 27.0658L29.7772 27.3805C29.214 27.3942 28.9492 28.0826 29.358 28.4702L38.8782 37.4976C39.237 37.8378 39.7945 37.8442 40.1436 37.4942C41.056 36.5794 42.7006 34.7812 43.2888 33.1701C43.8717 31.5736 43.7833 29.1584 43.6828 27.8905C43.6445 27.408 43.2317 27.054 42.7478 27.0658Z"
                    fill="url(#paint6_linear_1041_10202)"
                  />
                  <path
                    d="M12.6877 37.3843L22.0141 28.3648C22.4191 27.9732 22.1475 27.2874 21.5842 27.2793L8.46573 27.09C7.97141 27.0828 7.55699 27.4558 7.53737 27.9498C7.48609 29.2409 7.49494 31.6777 8.15382 33.2611C8.80679 34.8303 10.5082 36.5468 11.4412 37.4112C11.7962 37.7402 12.3397 37.7208 12.6877 37.3843Z"
                    fill="url(#paint7_linear_1041_10202)"
                  />
                  <path
                    d="M37.0244 39.1244L27.8712 29.9291C27.4738 29.5298 26.7921 29.8113 26.7921 30.3746L26.7921 43.4945C26.7921 43.9888 27.171 44.3978 27.6652 44.4103C28.9569 44.443 31.3933 44.3989 32.9671 43.7173C34.5267 43.0417 36.2184 41.3157 37.0693 40.3704C37.3931 40.0106 37.3659 39.4675 37.0244 39.1244Z"
                    fill="url(#paint8_linear_1041_10202)"
                  />
                  <path
                    d="M8.72673 24.638L21.6889 25.1995C22.2518 25.2239 22.5625 24.555 22.1808 24.1407L13.2917 14.4911C12.9567 14.1275 12.4009 14.0835 12.029 14.4091C11.0569 15.2602 9.29469 16.9434 8.59906 18.511C7.90966 20.0645 7.83485 22.4802 7.84953 23.752C7.85511 24.236 8.24315 24.617 8.72673 24.638Z"
                    fill="url(#paint9_linear_1041_10202)"
                  />
                  <path
                    d="M24.5155 43.4759L24.5453 30.5016C24.5466 29.9382 23.8655 29.6552 23.4672 30.0535L14.1901 39.3307C13.8405 39.6802 13.8192 40.2374 14.1599 40.5957C15.0501 41.5321 16.8041 43.2238 18.3989 43.8546C19.9794 44.4797 22.3961 44.4555 23.6662 44.3887C24.1495 44.3633 24.5144 43.9599 24.5155 43.4759Z"
                    fill="url(#paint10_linear_1041_10202)"
                  />
                  <path
                    d="M14.9785 12.9621L23.7471 22.5249C24.1278 22.9401 24.8205 22.6869 24.8436 22.124L25.3813 9.01515C25.4016 8.5212 25.0397 8.09702 24.5464 8.06429C23.2572 7.97873 20.821 7.92285 19.2207 8.53943C17.6346 9.15049 15.8736 10.8057 14.9847 11.7154C14.6464 12.0616 14.6514 12.6054 14.9785 12.9621Z"
                    fill="url(#paint11_linear_1041_10202)"
                  />
                </g>
                <g filter="url(#filter4_i_1041_10202)">
                  <path
                    d="M26.8768 9.50069L26.737 21.9007C26.7309 22.4391 27.3795 22.7155 27.7636 22.3382L36.7098 13.551C37.0469 13.2199 37.072 12.6876 36.7495 12.3423C35.9067 11.4396 34.2448 9.80776 32.726 9.1912C31.2208 8.58016 28.9108 8.58263 27.6963 8.63557C27.2341 8.65572 26.882 9.03808 26.8768 9.50069Z"
                    fill="url(#paint12_linear_1041_10202)"
                  />
                </g>
                <g filter="url(#filter5_i_1041_10202)">
                  <path
                    d="M37.978 15.1552L29.4123 24.1223C29.0403 24.5116 29.3257 25.1562 29.864 25.1427L42.3998 24.8268C42.8722 24.8149 43.2539 24.443 43.2539 23.9705C43.254 22.7356 43.1533 20.4086 42.4641 18.9214C41.7811 17.4474 40.0912 15.8725 39.1674 15.0823C38.8159 14.7816 38.2976 14.8206 37.978 15.1552Z"
                    fill="url(#paint13_linear_1041_10202)"
                  />
                </g>
                <g filter="url(#filter6_i_1041_10202)">
                  <path
                    d="M42.0009 27.0229L29.6037 27.3238C29.0654 27.3369 28.8123 27.9948 29.203 28.3653L38.3024 36.9937C38.6453 37.3188 39.1782 37.3249 39.5119 36.9904C40.384 36.116 41.9558 34.3973 42.518 32.8575C43.0752 31.3315 42.9906 29.0231 42.8946 27.8112C42.858 27.3501 42.4634 27.0117 42.0009 27.0229Z"
                    fill="url(#paint14_linear_1041_10202)"
                  />
                </g>
                <g filter="url(#filter7_i_1041_10202)">
                  <path
                    d="M13.2697 36.885L22.1839 28.2642C22.5709 27.8899 22.3113 27.2345 21.7729 27.2267L9.2344 27.0458C8.76194 27.0389 8.36584 27.3955 8.34709 27.8676C8.29807 29.1016 8.30653 31.4307 8.93628 32.9441C9.56038 34.4439 11.1866 36.0845 12.0783 36.9107C12.4176 37.2251 12.9371 37.2066 13.2697 36.885Z"
                    fill="url(#paint15_linear_1041_10202)"
                  />
                </g>
                <g filter="url(#filter8_i_1041_10202)">
                  <path
                    d="M36.5307 38.5489L27.7822 29.76C27.4023 29.3784 26.7507 29.6474 26.7507 30.1859L26.7507 42.7257C26.7507 43.1982 27.1129 43.5891 27.5852 43.6011C28.8198 43.6323 31.1485 43.5902 32.6527 42.9387C34.1434 42.293 35.7603 40.6433 36.5736 39.7398C36.8831 39.3959 36.857 38.8767 36.5307 38.5489Z"
                    fill="url(#paint16_linear_1041_10202)"
                  />
                </g>
                <g filter="url(#filter9_i_1041_10202)">
                  <path
                    d="M9.48396 24.7026L21.8732 25.2393C22.4111 25.2626 22.7081 24.6233 22.3433 24.2273L13.8471 15.0043C13.527 14.6568 12.9957 14.6147 12.6402 14.9259C11.7111 15.7394 10.0268 17.3481 9.36193 18.8465C8.70301 20.3313 8.63151 22.6402 8.64553 23.8558C8.65087 24.3184 9.02176 24.6826 9.48396 24.7026Z"
                    fill="url(#paint17_linear_1041_10202)"
                  />
                </g>
                <g filter="url(#filter10_i_1041_10202)">
                  <path
                    d="M24.5746 42.708L24.6031 30.3072C24.6043 29.7688 23.9534 29.4983 23.5726 29.879L14.7056 38.746C14.3715 39.0801 14.3512 39.6127 14.6768 39.9551C15.5277 40.8501 17.2041 42.467 18.7284 43.0699C20.239 43.6675 22.5489 43.6443 23.7628 43.5804C24.2248 43.5561 24.5735 43.1706 24.5746 42.708Z"
                    fill="url(#paint18_linear_1041_10202)"
                  />
                </g>
                <g filter="url(#filter11_i_1041_10202)">
                  <path
                    d="M15.4592 13.5427L23.8402 22.6827C24.2041 23.0796 24.8662 22.8375 24.8882 22.2995L25.4022 9.77016C25.4215 9.29805 25.0757 8.89262 24.6042 8.86133C23.372 8.77956 21.0435 8.72615 19.5139 9.31547C17.998 9.89952 16.3148 11.4816 15.4652 12.351C15.1419 12.6819 15.1466 13.2017 15.4592 13.5427Z"
                    fill="url(#paint19_linear_1041_10202)"
                  />
                </g>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_ii_1041_10202"
                x="-1.94301"
                y="-0.0639432"
                width="54.5831"
                height="67.2913"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1.00373" dy="1.25467" />
                <feGaussianBlur stdDeviation="1.882" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1041_10202"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-2.00747" dy="-0.125467" />
                <feGaussianBlur stdDeviation="3.13667" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.81 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_1041_10202"
                  result="effect2_innerShadow_1041_10202"
                />
              </filter>
              <filter
                id="filter1_f_1041_10202"
                x="-0.345562"
                y="-0.0776172"
                width="52.3918"
                height="52.3916"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="2.78832"
                  result="effect1_foregroundBlur_1041_10202"
                />
              </filter>
              <filter
                id="filter2_d_1041_10202"
                x="-1.96186"
                y="0.555054"
                width="55.5007"
                height="55.5778"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2.23066" />
                <feGaussianBlur stdDeviation="4.74014" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.804167 0 0 0 0 0.804167 0 0 0 0 0.804167 0 0 0 0.11 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1041_10202"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1041_10202"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_f_1041_10202"
                x="7.40059"
                y="7.68684"
                width="36.7759"
                height="36.8529"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.0589227"
                  result="effect1_foregroundBlur_1041_10202"
                />
              </filter>
              <filter
                id="filter4_i_1041_10202"
                x="26.7369"
                y="8.61426"
                width="10.2406"
                height="14.3698"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.471382" />
                <feGaussianBlur stdDeviation="0.589227" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.8625 0 0 0 0 0.8625 0 0 0 0.17 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1041_10202"
                />
              </filter>
              <filter
                id="filter5_i_1041_10202"
                x="29.2438"
                y="14.8789"
                width="14.0101"
                height="10.7351"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.471382" />
                <feGaussianBlur stdDeviation="0.589227" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.8625 0 0 0 0 0.8625 0 0 0 0.17 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1041_10202"
                />
              </filter>
              <filter
                id="filter6_i_1041_10202"
                x="29.0137"
                y="27.0225"
                width="13.9509"
                height="10.6882"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.471382" />
                <feGaussianBlur stdDeviation="0.589227" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.8625 0 0 0 0 0.8625 0 0 0 0.17 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1041_10202"
                />
              </filter>
              <filter
                id="filter7_i_1041_10202"
                x="8.32898"
                y="27.0459"
                width="14.04"
                height="10.5622"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.471382" />
                <feGaussianBlur stdDeviation="0.589227" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.8625 0 0 0 0 0.8625 0 0 0 0.17 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1041_10202"
                />
              </filter>
              <filter
                id="filter8_i_1041_10202"
                x="26.7507"
                y="29.5811"
                width="10.0405"
                height="14.4987"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.471382" />
                <feGaussianBlur stdDeviation="0.589227" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.8625 0 0 0 0 0.8625 0 0 0 0.17 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1041_10202"
                />
              </filter>
              <filter
                id="filter9_i_1041_10202"
                x="8.64404"
                y="14.7158"
                width="13.8602"
                height="10.9958"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.471382" />
                <feGaussianBlur stdDeviation="0.589227" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.8625 0 0 0 0 0.8625 0 0 0 0.17 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1041_10202"
                />
              </filter>
              <filter
                id="filter10_i_1041_10202"
                x="14.4435"
                y="29.7012"
                width="10.1597"
                height="14.3825"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.471382" />
                <feGaussianBlur stdDeviation="0.589227" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.8625 0 0 0 0 0.8625 0 0 0 0.17 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1041_10202"
                />
              </filter>
              <filter
                id="filter11_i_1041_10202"
                x="15.2238"
                y="8.81152"
                width="10.1792"
                height="14.5397"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.471382" />
                <feGaussianBlur stdDeviation="0.589227" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.8625 0 0 0 0 0.8625 0 0 0 0.17 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1041_10202"
                />
              </filter>
              <radialGradient
                id="paint0_radial_1041_10202"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25.8504 26.118) rotate(90) scale(36.1038 21.5242)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.78" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_1041_10202"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25.8504 26.118) rotate(90) scale(36.1038 21.5242)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.78" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_1041_10202"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25.8504 26.118) rotate(90) scale(36.1038 21.5242)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.78" />
              </radialGradient>
              <radialGradient
                id="paint3_radial_1041_10202"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25.8503 26.1183) rotate(90) scale(34.5859 20.6192)"
              >
                <stop stopColor="#FA8D16" />
                <stop offset="1" stopColor="#FF8500" stopOpacity="0.78" />
              </radialGradient>
              <linearGradient
                id="paint4_linear_1041_10202"
                x1="34.0752"
                y1="8.45885"
                x2="22.9651"
                y2="19.3714"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FA8D16" stopOpacity="0.9" />
                <stop offset="1" stopColor="#FA8D16" stopOpacity="0.67" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_1041_10202"
                x1="43.9518"
                y1="19.3297"
                x2="28.3837"
                y2="19.7219"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FA8D16" stopOpacity="0.9" />
                <stop offset="1" stopColor="#FA8D16" stopOpacity="0.67" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_1041_10202"
                x1="43.2752"
                y1="34.2028"
                x2="31.9748"
                y2="23.4874"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FA8D16" stopOpacity="0.9" />
                <stop offset="1" stopColor="#FA8D16" stopOpacity="0.67" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_1041_10202"
                x1="7.46415"
                y1="32.4924"
                x2="23.0356"
                y2="32.7172"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FA8D16" stopOpacity="0.9" />
                <stop offset="1" stopColor="#FA8D16" stopOpacity="0.67" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_1041_10202"
                x1="32.2084"
                y1="44.418"
                x2="32.2084"
                y2="28.8449"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FA8D16" stopOpacity="0.9" />
                <stop offset="1" stopColor="#FA8D16" stopOpacity="0.67" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_1041_10202"
                x1="8.68229"
                y1="17.4816"
                x2="19.2335"
                y2="28.9355"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FA8D16" stopOpacity="0.9" />
                <stop offset="1" stopColor="#FA8D16" stopOpacity="0.67" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_1041_10202"
                x1="17.367"
                y1="43.8136"
                x2="28.3788"
                y2="32.8018"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FA8D16" stopOpacity="0.9" />
                <stop offset="1" stopColor="#FA8D16" stopOpacity="0.67" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_1041_10202"
                x1="20.0074"
                y1="7.87043"
                x2="19.3691"
                y2="23.4304"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FA8D16" stopOpacity="0.9" />
                <stop offset="1" stopColor="#FA8D16" stopOpacity="0.67" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_1041_10202"
                x1="33.7119"
                y1="9.2392"
                x2="29.0702"
                y2="13.7983"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FEDC00" />
                <stop offset="1" stopColor="#FEDC00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_1041_10202"
                x1="43.1519"
                y1="19.6294"
                x2="27.7367"
                y2="25.7931"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FEDC00" />
                <stop offset="1" stopColor="#FEDC00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint14_linear_1041_10202"
                x1="42.505"
                y1="33.8445"
                x2="28.1056"
                y2="27.6143"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FEDC00" />
                <stop offset="1" stopColor="#FEDC00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint15_linear_1041_10202"
                x1="8.2771"
                y1="32.2094"
                x2="23.5049"
                y2="27.8614"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FEDC00" />
                <stop offset="1" stopColor="#FEDC00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint16_linear_1041_10202"
                x1="31.9276"
                y1="43.6084"
                x2="27.2819"
                y2="28.1662"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FEDC00" />
                <stop offset="1" stopColor="#FEDC00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint17_linear_1041_10202"
                x1="9.44148"
                y1="17.8626"
                x2="19.9591"
                y2="24.0942"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FEDC00" />
                <stop offset="1" stopColor="#FEDC00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint18_linear_1041_10202"
                x1="17.7421"
                y1="43.0308"
                x2="25.1717"
                y2="27.3459"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FEDC00" />
                <stop offset="1" stopColor="#FEDC00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint19_linear_1041_10202"
                x1="20.2658"
                y1="8.67604"
                x2="19.9992"
                y2="15.1768"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FEDC00" />
                <stop offset="1" stopColor="#FEDC00" stopOpacity="0" />
              </linearGradient>
              <clipPath id="clip0_1041_10202">
                <rect width="51.6922" height="65.9954" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default FormProgress;

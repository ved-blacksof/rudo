import FormHeader from "./formHeader";
import React  from "react";
// import reportBg from "./svgs/reportBg.svg";
import { useFormContext, useDispatchContext } from "../../context";
import { useState, useEffect } from "react";

const ReportScreen = () => {
  const [data, setData] = useState(0);
  const { ansData } = useFormContext();
  const { moveNext } = useDispatchContext();
  useEffect(() => {
    const marks = Object.keys(ansData).reduce((a, c) => a + ansData[c], 0);
    const score = Math.floor((marks / 80) * 100);
    setData(score);
  }, [ansData]);
  return (
    <>
      <FormHeader />
      <div
        style={{ height: "calc(100vh - 64px)" }}
        className=" flex-col bg-formBg relative py-20 "
      >
        <div
          style={{
            minHeight: "400px",
          }}
          className="  bg-white max-w-screen-md  py-10 rounded-3xl w-11/12 mx-auto "
        >
          <div className="flex flex-nowrap items-center justify-center gap-2">
            <h1 className=" text-green font-epilogue lg:text-3xl text-xl  leading-7 pt-2 font-bold  capitalize ">
              CONGRATULATIONS
            </h1>
            <svg
              width="28"
              height="28"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_649_19848)">
                <path
                  d="M10.7552 7.22852C10.6554 7.32831 10.5796 7.44859 10.5164 7.58045L10.5092 7.57333L0.516024 30.0848L0.525825 30.0946C0.340501 30.4537 0.650562 31.1843 1.28583 31.8204C1.9211 32.4557 2.6517 32.7658 3.01077 32.5804L3.01968 32.5894L25.5312 22.5952L25.524 22.5872C25.655 22.5249 25.7753 22.4491 25.876 22.3475C27.2677 20.9558 25.0108 16.443 20.8366 12.2679C16.6606 8.09277 12.1478 5.83681 10.7552 7.22852Z"
                  fill="#DD2E44"
                />
                <path
                  d="M11.9794 11.248L0.76728 29.5185L0.516024 30.0842L0.525825 30.094C0.340501 30.4531 0.650562 31.1837 1.28583 31.8199C1.49254 32.0266 1.70726 32.1834 1.91753 32.3161L15.5433 15.7029L11.9794 11.248Z"
                  fill="#EA596E"
                />
                <path
                  d="M20.8991 12.1985C25.06 16.3612 27.3703 20.7983 26.057 22.1098C24.7446 23.4231 20.3075 21.1137 16.1439 16.9528C11.9822 12.7901 9.67274 8.35127 10.9852 7.03886C12.2985 5.72645 16.7355 8.03587 20.8991 12.1985Z"
                  fill="#A0041E"
                />
                <path
                  d="M16.9602 12.6819C16.7829 12.8253 16.5512 12.9002 16.3062 12.8735C15.5328 12.7897 14.8824 12.5206 14.4271 12.0956C13.9451 11.6457 13.7072 11.0416 13.7723 10.4366C13.8863 9.37458 14.9519 8.39985 16.7686 8.59586C17.4752 8.6716 17.7906 8.4444 17.8013 8.3357C17.8137 8.22789 17.5545 7.93832 16.8479 7.8617C16.0746 7.77795 15.4241 7.50887 14.968 7.08387C14.4859 6.63393 14.2472 6.02984 14.3131 5.42487C14.4289 4.36282 15.4936 3.38809 17.3086 3.585C17.8236 3.64024 18.0953 3.53421 18.2102 3.46561C18.302 3.40947 18.3385 3.35601 18.3421 3.32483C18.3528 3.21702 18.0971 2.92745 17.3888 2.85083C16.8996 2.79737 16.545 2.35901 16.5993 1.86897C16.6519 1.37982 17.0894 1.0261 17.5803 1.07956C19.3952 1.27469 20.2292 2.45345 20.1143 3.51639C19.9984 4.58022 18.9337 5.55317 17.117 5.35805C16.602 5.30191 16.3329 5.40883 16.2171 5.47744C16.1253 5.53268 16.0879 5.58703 16.0844 5.61732C16.0728 5.72602 16.3303 6.0147 17.0386 6.09132C18.8535 6.28734 19.6875 7.46521 19.5725 8.52815C19.4576 9.5902 18.3929 10.5649 16.5771 10.368C16.0621 10.3128 15.7912 10.4197 15.6754 10.4874C15.5827 10.5444 15.5471 10.5979 15.5435 10.6282C15.532 10.736 15.7894 11.0256 16.4969 11.1022C16.9851 11.1556 17.3406 11.5949 17.2863 12.084C17.2613 12.3282 17.1375 12.5393 16.9602 12.6819Z"
                  fill="#AA8DD8"
                />
                <path
                  d="M27.7153 20.9214C29.4732 20.4251 30.6858 21.2092 30.9745 22.2383C31.2632 23.2665 30.6377 24.5682 28.8807 25.0627C28.1946 25.2551 27.9888 25.583 28.0165 25.6873C28.0467 25.7924 28.3951 25.9653 29.0794 25.7719C30.8364 25.2774 32.049 26.0615 32.3377 27.0897C32.6282 28.1188 32.0009 29.4187 30.243 29.9141C29.5578 30.1065 29.3511 30.4353 29.3814 30.5395C29.4108 30.6438 29.7583 30.8166 30.4435 30.6242C30.9157 30.4914 31.4093 30.7667 31.5421 31.2399C31.6739 31.7139 31.3986 32.2057 30.9246 32.3393C29.1685 32.8338 27.955 32.0515 27.6645 31.0216C27.3758 29.9934 28.0022 28.6934 29.761 28.198C30.447 28.0047 30.6529 27.6777 30.6226 27.5726C30.5941 27.4683 30.2466 27.2946 29.5623 27.487C27.8035 27.9824 26.5918 27.2002 26.3022 26.1693C26.0126 25.1411 26.639 23.8412 28.3969 23.3449C29.0812 23.1533 29.287 22.8237 29.2585 22.7203C29.2282 22.6152 28.8816 22.4423 28.1964 22.6348C27.7224 22.7684 27.2315 22.4922 27.0979 22.0191C26.9651 21.5469 27.2413 21.0551 27.7153 20.9214Z"
                  fill="#77B255"
                />
                <path
                  d="M20.8898 18.5188C20.6278 18.5188 20.3694 18.4039 20.193 18.1847C19.8856 17.7998 19.9489 17.2394 20.332 16.932C20.5263 16.7761 25.1593 13.1373 31.7072 14.0737C32.1945 14.1432 32.5331 14.5941 32.4636 15.0814C32.3941 15.5679 31.9468 15.91 31.455 15.837C25.6699 15.0155 21.4876 18.2907 21.4466 18.3237C21.2809 18.4556 21.0849 18.5188 20.8898 18.5188Z"
                  fill="#AA8DD8"
                />
                <path
                  d="M5.52397 14.8122C5.43933 14.8122 5.3529 14.7997 5.26737 14.7748C4.79604 14.6331 4.52875 14.1368 4.67041 13.6655C5.67989 10.3038 6.59493 4.93925 5.47051 3.54041C5.34489 3.38182 5.15511 3.2259 4.72031 3.25886C3.88457 3.32302 3.96387 5.08626 3.96476 5.10408C4.00218 5.59501 3.63331 6.02268 3.14328 6.05921C2.64522 6.08951 2.22468 5.72777 2.18815 5.23684C2.09638 4.00818 2.47861 1.64174 4.58666 1.48225C5.52754 1.41097 6.30893 1.73796 6.86044 2.42402C8.97295 5.0533 6.82837 12.6756 6.37753 14.1778C6.2617 14.5636 5.90709 14.8122 5.52397 14.8122Z"
                  fill="#77B255"
                />
                <path
                  d="M23.1158 10.3575C23.8539 10.3575 24.4522 9.75915 24.4522 9.02104C24.4522 8.28293 23.8539 7.68457 23.1158 7.68457C22.3777 7.68457 21.7793 8.28293 21.7793 9.02104C21.7793 9.75915 22.3777 10.3575 23.1158 10.3575Z"
                  fill="#5C913B"
                />
                <path
                  d="M2.17844 18.3764C3.16259 18.3764 3.9604 17.5786 3.9604 16.5945C3.9604 15.6103 3.16259 14.8125 2.17844 14.8125C1.19429 14.8125 0.396484 15.6103 0.396484 16.5945C0.396484 17.5786 1.19429 18.3764 2.17844 18.3764Z"
                  fill="#9266CC"
                />
                <path
                  d="M29.354 19.2677C30.0922 19.2677 30.6905 18.6693 30.6905 17.9312C30.6905 17.1931 30.0922 16.5947 29.354 16.5947C28.6159 16.5947 28.0176 17.1931 28.0176 17.9312C28.0176 18.6693 28.6159 19.2677 29.354 19.2677Z"
                  fill="#5C913B"
                />
                <path
                  d="M21.3345 29.9591C22.0726 29.9591 22.671 29.3607 22.671 28.6226C22.671 27.8845 22.0726 27.2861 21.3345 27.2861C20.5964 27.2861 19.998 27.8845 19.998 28.6226C19.998 29.3607 20.5964 29.9591 21.3345 29.9591Z"
                  fill="#5C913B"
                />
                <path
                  d="M25.3445 5.90278C26.3286 5.90278 27.1264 5.10497 27.1264 4.12083C27.1264 3.13668 26.3286 2.33887 25.3445 2.33887C24.3603 2.33887 23.5625 3.13668 23.5625 4.12083C23.5625 5.10497 24.3603 5.90278 25.3445 5.90278Z"
                  fill="#FFE7A3"
                />
                <path
                  d="M29.354 9.46688C30.0922 9.46688 30.6905 8.86853 30.6905 8.13041C30.6905 7.3923 30.0922 6.79395 29.354 6.79395C28.6159 6.79395 28.0176 7.3923 28.0176 8.13041C28.0176 8.86853 28.6159 9.46688 29.354 9.46688Z"
                  fill="#FFE7A3"
                />
                <path
                  d="M26.6802 13.0304C27.4183 13.0304 28.0167 12.432 28.0167 11.6939C28.0167 10.9558 27.4183 10.3574 26.6802 10.3574C25.9421 10.3574 25.3438 10.9558 25.3438 11.6939C25.3438 12.432 25.9421 13.0304 26.6802 13.0304Z"
                  fill="#FFE7A3"
                />
                <path
                  d="M7.07866 22.8311C7.81677 22.8311 8.41513 22.2328 8.41513 21.4947C8.41513 20.7566 7.81677 20.1582 7.07866 20.1582C6.34055 20.1582 5.74219 20.7566 5.74219 21.4947C5.74219 22.2328 6.34055 22.8311 7.07866 22.8311Z"
                  fill="#FFE7A3"
                />
              </g>
              <defs>
                <clipPath id="clip0_649_19848">
                  <rect
                    width="32.0753"
                    height="32.0753"
                    fill="white"
                    transform="translate(0.396484 0.556641)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className=" font-bold  text-white  text-2xl lg:text-3xl xl:text-5xl xl:h-44 xl:w-44 lg:w-32 lg:h-32 w-24 h-24  grid place-content-center mx-auto mt-4 relative ">
            <svg
              width="201"
              height="218"
              viewBox="0 0 201 218"
              fill="none"
              className=" absolute left-0 top-0 bottom-0 right-0 xl:h-44 xl:w-44 lg:w-32 lg:h-32 w-24 h-24  "
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1210_11718)">
                <path
                  d="M78.5285 6.7017C92.1421 -1.15815 108.915 -1.15814 122.528 6.70171L178.579 39.0625C192.193 46.9224 200.579 61.448 200.579 77.1677V141.889C200.579 157.609 192.193 172.135 178.579 179.994L122.528 212.355C108.915 220.215 92.1421 220.215 78.5285 212.355L22.4779 179.994C8.86422 172.135 0.477882 157.609 0.477882 141.889V77.1676C0.477882 61.4479 8.86423 46.9224 22.4779 39.0625L78.5285 6.7017Z"
                  fill="white"
                />
                <path
                  d="M78.526 13.7857C92.1397 5.92583 108.912 5.92585 122.526 13.7857L172.441 42.6043C186.055 50.4641 194.441 64.9897 194.441 80.7094V138.347C194.441 154.066 186.055 168.592 172.441 176.452L122.526 205.27C108.912 213.13 92.1397 213.13 78.526 205.27L28.6107 176.452C14.9971 168.592 6.61077 154.066 6.61077 138.347V80.7094C6.61077 64.9897 14.9971 50.4641 28.6108 42.6043L78.526 13.7857Z"
                  fill="url(#paint0_linear_1210_11718)"
                />
                <g filter="url(#filter0_i_1210_11718)">
                  <path
                    d="M78.5291 20.3462C92.1428 12.4864 108.915 12.4864 122.529 20.3462L166.764 45.8851C180.377 53.745 188.764 68.2706 188.764 83.9902V135.068C188.764 150.788 180.377 165.313 166.764 173.173L122.529 198.712C108.915 206.572 92.1428 206.572 78.5291 198.712L34.2945 173.173C20.6808 165.313 12.2945 150.788 12.2945 135.068V83.9903C12.2945 68.2706 20.6808 53.745 34.2945 45.8851L78.5291 20.3462Z"
                    fill="url(#paint1_linear_1210_11718)"
                  />
                </g>
                <g filter="url(#filter1_i_1210_11718)">
                  <path
                    d="M78.5285 26.1109C92.1422 18.251 108.915 18.251 122.529 26.1109L163.172 49.5762C176.785 57.4361 185.172 71.9617 185.172 87.6813V134.612C185.172 150.332 176.785 164.857 163.172 172.717L122.528 196.182C108.915 204.042 92.1422 204.042 78.5285 196.182L37.8853 172.717C24.2717 164.857 15.8854 150.332 15.8854 134.612V87.6813C15.8854 71.9616 24.2717 57.4361 37.8854 49.5762L78.5285 26.1109Z"
                    fill="url(#paint2_linear_1210_11718)"
                  />
                </g>
                <g filter="url(#filter2_i_1210_11718)">
                  <path
                    d="M83.2304 29.1876C93.6806 23.1542 106.556 23.1542 117.006 29.1876L161.459 54.8529C171.909 60.8863 178.347 72.0364 178.347 84.1032V135.434C178.347 147.501 171.909 158.651 161.459 164.684L117.006 190.349C106.556 196.383 93.6805 196.383 83.2304 190.349L38.7768 164.684C28.3267 158.651 21.8892 147.501 21.8892 135.434V84.1032C21.8892 72.0364 28.3267 60.8863 38.7768 54.8529L83.2304 29.1876Z"
                    fill="#E99500"
                  />
                </g>
                <mask
                  id="mask0_1210_11718"
                  maskUnits="userSpaceOnUse"
                  x="21"
                  y="27"
                  width="158"
                  height="166"
                >
                  <path
                    d="M75.6181 33.5826C90.7788 24.8296 109.457 24.8296 124.618 33.5826L153.847 50.4579C169.008 59.2109 178.347 75.3871 178.347 92.8931V126.644C178.347 144.15 169.008 160.326 153.847 169.079L124.618 185.954C109.457 194.707 90.7787 194.707 75.6181 185.954L46.3892 169.079C31.2285 160.326 21.8892 144.15 21.8892 126.644V92.8931C21.8892 75.3871 31.2285 59.2109 46.3892 50.4579L75.6181 33.5826Z"
                    fill="#E99500"
                  />
                </mask>
                <g mask="url(#mask0_1210_11718)">
                  <line
                    x1="-11.3228"
                    y1="44.3807"
                    x2="36.3011"
                    y2="222.116"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="-5.43999"
                    y1="42.8046"
                    x2="42.1839"
                    y2="220.54"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="0.442818"
                    y1="41.2294"
                    x2="48.0667"
                    y2="218.964"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="6.32563"
                    y1="39.6522"
                    x2="53.9496"
                    y2="217.387"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="12.2084"
                    y1="38.0751"
                    x2="59.8324"
                    y2="215.81"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="18.0913"
                    y1="36.4989"
                    x2="65.7152"
                    y2="214.234"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="23.9741"
                    y1="34.9237"
                    x2="71.598"
                    y2="212.659"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="29.8549"
                    y1="33.3466"
                    x2="77.4789"
                    y2="211.081"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="35.7377"
                    y1="31.7704"
                    x2="83.3617"
                    y2="209.505"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="41.6206"
                    y1="30.1942"
                    x2="89.2445"
                    y2="207.929"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="47.5034"
                    y1="28.619"
                    x2="95.1273"
                    y2="206.354"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="53.3862"
                    y1="27.0409"
                    x2="101.01"
                    y2="204.776"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="59.269"
                    y1="25.4667"
                    x2="106.893"
                    y2="203.202"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="65.1518"
                    y1="23.8895"
                    x2="112.776"
                    y2="201.624"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="71.0346"
                    y1="22.3134"
                    x2="118.659"
                    y2="200.048"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="76.9174"
                    y1="20.7362"
                    x2="124.541"
                    y2="198.471"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="82.7983"
                    y1="19.161"
                    x2="130.422"
                    y2="196.896"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="88.6791"
                    y1="17.5848"
                    x2="136.303"
                    y2="195.32"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="94.5639"
                    y1="16.0077"
                    x2="142.188"
                    y2="193.743"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="100.447"
                    y1="14.4325"
                    x2="148.071"
                    y2="192.167"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="106.33"
                    y1="12.8553"
                    x2="153.953"
                    y2="190.59"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="112.21"
                    y1="11.2792"
                    x2="159.834"
                    y2="189.014"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="118.095"
                    y1="9.70398"
                    x2="165.719"
                    y2="187.439"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="123.978"
                    y1="8.12683"
                    x2="171.602"
                    y2="185.862"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="129.861"
                    y1="6.55066"
                    x2="177.485"
                    y2="184.286"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="135.74"
                    y1="4.97449"
                    x2="183.364"
                    y2="182.709"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="141.628"
                    y1="3.39832"
                    x2="189.252"
                    y2="181.133"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="147.509"
                    y1="1.82117"
                    x2="195.133"
                    y2="179.556"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="153.392"
                    y1="0.244997"
                    x2="201.016"
                    y2="177.98"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="159.271"
                    y1="-1.3302"
                    x2="206.895"
                    y2="176.405"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="165.158"
                    y1="-2.90637"
                    x2="212.782"
                    y2="174.829"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="34.7303"
                    y1="221.207"
                    x2="212.465"
                    y2="173.583"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="33.1542"
                    y1="215.324"
                    x2="210.889"
                    y2="167.7"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="31.578"
                    y1="209.442"
                    x2="209.313"
                    y2="161.818"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="29.9999"
                    y1="203.559"
                    x2="207.735"
                    y2="155.935"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="28.4257"
                    y1="197.675"
                    x2="206.161"
                    y2="150.051"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="26.8495"
                    y1="191.793"
                    x2="204.584"
                    y2="144.169"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="25.2733"
                    y1="185.912"
                    x2="203.008"
                    y2="138.288"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="23.6952"
                    y1="180.029"
                    x2="201.43"
                    y2="132.405"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="22.119"
                    y1="174.145"
                    x2="199.854"
                    y2="126.521"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="20.5448"
                    y1="168.262"
                    x2="198.28"
                    y2="120.638"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="18.9686"
                    y1="162.381"
                    x2="196.704"
                    y2="114.757"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="17.3886"
                    y1="156.499"
                    x2="195.123"
                    y2="108.875"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="15.8143"
                    y1="150.614"
                    x2="193.549"
                    y2="102.99"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="14.2382"
                    y1="144.731"
                    x2="191.973"
                    y2="97.1071"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="12.6639"
                    y1="138.851"
                    x2="190.399"
                    y2="91.2272"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="11.0858"
                    y1="132.967"
                    x2="188.821"
                    y2="85.3434"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="9.50965"
                    y1="127.084"
                    x2="187.245"
                    y2="79.4596"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="7.93347"
                    y1="121.204"
                    x2="185.668"
                    y2="73.5797"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="6.3534"
                    y1="115.32"
                    x2="184.088"
                    y2="67.6959"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="4.77722"
                    y1="109.437"
                    x2="182.512"
                    y2="61.8131"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="3.203"
                    y1="103.554"
                    x2="180.938"
                    y2="55.9303"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="1.62683"
                    y1="97.6734"
                    x2="179.362"
                    y2="50.0495"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="0.0506607"
                    y1="91.7896"
                    x2="177.786"
                    y2="44.1657"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="-1.52551"
                    y1="85.9068"
                    x2="176.209"
                    y2="38.2829"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="-3.10168"
                    y1="80.024"
                    x2="174.633"
                    y2="32.4"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="-4.6759"
                    y1="74.1431"
                    x2="173.059"
                    y2="26.5192"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="-6.25403"
                    y1="68.2593"
                    x2="171.481"
                    y2="20.6354"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="-7.83215"
                    y1="62.3765"
                    x2="169.903"
                    y2="14.7526"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="-9.40832"
                    y1="56.4927"
                    x2="168.327"
                    y2="8.8688"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="-10.9845"
                    y1="50.6119"
                    x2="166.75"
                    y2="2.98794"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                  <line
                    x1="-12.5607"
                    y1="44.7291"
                    x2="165.174"
                    y2="-2.89487"
                    stroke="#737373"
                    stroke-opacity="0.14"
                    stroke-width="1.26871"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_i_1210_11718"
                  x="12.2949"
                  y="14.4512"
                  width="176.469"
                  height="190.155"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  <feOffset />
                  <feGaussianBlur stdDeviation="4.33017" />
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
                    result="effect1_innerShadow_1210_11718"
                  />
                </filter>
                <filter
                  id="filter1_i_1210_11718"
                  x="15.8848"
                  y="20.2158"
                  width="169.287"
                  height="181.861"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  <feOffset />
                  <feGaussianBlur stdDeviation="4.33017" />
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
                    result="effect1_innerShadow_1210_11718"
                  />
                </filter>
                <filter
                  id="filter2_i_1210_11718"
                  x="21.8887"
                  y="24.6621"
                  width="156.459"
                  height="173.676"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  <feOffset dy="3.46413" />
                  <feGaussianBlur stdDeviation="12.9905" />
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
                    result="effect1_innerShadow_1210_11718"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1210_11718"
                  x1="100.526"
                  y1="1.08398"
                  x2="100.526"
                  y2="217.972"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FAD247" />
                  <stop offset="1" stop-color="#FA4747" stop-opacity="0.69" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1210_11718"
                  x1="100.529"
                  y1="7.64453"
                  x2="100.529"
                  y2="211.414"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FCD400" />
                  <stop offset="1" stop-color="#FCDF01" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1210_11718"
                  x1="100.529"
                  y1="13.4092"
                  x2="100.529"
                  y2="208.884"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#DD9200" />
                  <stop offset="1" stop-color="#FCDF01" />
                </linearGradient>
                <clipPath id="clip0_1210_11718">
                  <rect width="201" height="218" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h1 className="z-10">{data + "%"}</h1>
          </div>
          <div className=" grid place-content-center text-center gap-2 mt-8">
            <h3 className=" font-epilogue text-dark lg:text-xl text-lg px-2 ">
              Sweet, sour and minty! Just as you like it!
            </h3>
            <h1 className=" font-epilogue font-bold lg:text-3xl text-xl text-dark  px-4 lg:w-9/12 mx-auto ">
              Suggestion: Keep the course and you’ll be fine!
            </h1>
          </div>
          <div className="grid place-content-center  mt-4 xl:mt-6  ">
            <button
              onClick={moveNext}
              className="  mt-2 bg-red text-white text-xl lg:text-2xl xl:text-3xl pb-3 pt-5 px-10 hover:bg-opacity-80 rounded-2xl font-epilogue "
            >
              Get report card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportScreen;

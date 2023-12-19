
export default function Home() {
    return (
        <>
            <div className="h-[500px] relative">
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(/heroImage.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                    }}
                ></div>
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the alpha value for transparency (0.0 to 1.0)
                        position: 'absolute',
                        top: '0',
                        left: '0',
                    }}
                ></div>
                <div className="flex flex-1 flex-col absolute top-0 left-0 w-full h-full items-center justify-center">
                    <h1 className="px-[30%]" style={{color:"#FFFFFF",fontWeight:"700",textTransform:"uppercase",fontSize:"58px"}} >Solutions that Inspire, Products that Deliver</h1>
                    <p className="px-[30%]" style={{color:"#FFFFFF",fontWeight:"400",lineHeight:"28px",textTransform:"uppercase",fontSize:"15px"}} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus neque, malesuada sit amet auctor ac, euismod sed enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sed ultricies libero. Morbi porttitor semper nibh, bibendum ultricies elit mollis id.
                    </p>
                </div>
            </div>
            <div
                className="h-[600px] my-20 mx-40 relative flex flex-1 flex-col"
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(/bgImage.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        opacity: '0.1',  // Adjust the opacity value (0.0 to 1.0)
                    }}
                ></div>
                <div className="flex justify-center items-center py-2" >
                    <p className="text-center text-blue-950 text-3xl font-semibold [font-family:'Lato-Regular',Helvetica] uppercase leading-loose tracking-tight" >
                        View Our Product
                    </p>
                </div>
                <div className="flex justify-center items-center py-2" >
                    <p className="text-center text-blue-950 text-opacity-90 text-base font-medium [font-family:'Lato-Regular',Helvetica] leading-snug tracking-tight" >
                        Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum has been the industry's standard. dummy text ever
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-2 py-10 px-6 justify-center items-center" >
                    <div className=" w-[370px] h-[320px] bg-[#FAF4F3] opacity-[10]" >
                        <p className="py-[30px] px-[70px]" style={{ color: "#404F74", fontSize: "16px", fontWeight: "700", lineHeight: "22px", wordWrap: "normal" }} >Product Management Tool</p>
                        <p className="py-[0px] px-[30px]" style={{ color: "#404F74", fontSize: "14px", fontWeight: "400", lineHeight: "22px", wordWrap: "break-word" }} >Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...</p>
                        <div className="grid grid-cols-2 py-[20px]" >
                            <div className="flex flex-1 justify-center items-start" >
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.77 14.7251H13.9068C12.1026 14.7251 10.6346 13.2572 10.6346 11.4529C10.6346 9.64869 12.1026 8.18077 13.9068 8.18077H16.77C16.9961 8.18077 17.179 7.99782 17.179 7.77173V6.54466C17.179 5.68694 16.5137 4.98938 15.6732 4.92174L13.3241 0.818722C13.1064 0.439251 12.7549 0.16803 12.3343 0.0554074C11.9156 -0.0564478 11.4779 0.00229827 11.1032 0.220372L3.05042 4.90855H1.63611C0.733789 4.90855 0 5.6423 0 6.54466V16.3612C0 17.2635 0.73375 17.9973 1.63611 17.9973H15.5429C16.4452 17.9973 17.179 17.2636 17.179 16.3612V15.1342C17.179 14.9081 16.9961 14.7251 16.77 14.7251ZM13.8314 3.35186L14.7226 4.90855H11.1575L13.8314 3.35186ZM4.67629 4.90855L11.515 0.927357C11.6999 0.819106 11.916 0.790346 12.1225 0.845488C12.3315 0.901396 12.5056 1.03641 12.6139 1.22534L12.6147 1.22684L6.29108 4.90855H4.67629Z" fill="#404F7A" />
                                    <path d="M16.7712 8.99902H13.9076C12.5541 8.99902 11.4531 10.1 11.4531 11.4535C11.4531 12.807 12.5541 13.908 13.9076 13.908H16.7712C17.448 13.908 17.9985 13.3575 17.9985 12.6808V10.2263C17.9985 9.54952 17.448 8.99902 16.7712 8.99902ZM13.9076 12.2717C13.4566 12.2717 13.0895 11.9045 13.0895 11.4535C13.0895 11.0025 13.4566 10.6354 13.9076 10.6354C14.3586 10.6354 14.7258 11.0025 14.7258 11.4535C14.7258 11.9045 14.3587 12.2717 13.9076 12.2717Z" fill="#404F7A" />
                                </svg>
                                <p style={{ color: "#404F74", fontSize: "15px", fontWeight: "600", lineHeight: "22px", wordWrap: "break-word", marginLeft: "10px" }} >200$</p>
                            </div>
                            <div className="flex flex-1 justify-center items-end" >
                                <svg width="112" height="19" viewBox="0 0 112 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 6908">
                                        <path id="Vector" d="M4.27515 18.2326C4.06589 18.2326 3.85807 18.1675 3.68072 18.0398C3.35035 17.8013 3.19602 17.3914 3.28593 16.9958L4.51474 11.6043L0.347415 7.96402C0.0410883 7.69766 -0.0759337 7.27584 0.0498322 6.88986C0.175598 6.50462 0.517774 6.23187 0.922906 6.19456L6.43678 5.69595L8.61677 0.614448C8.77751 0.241105 9.14359 0 9.55032 0C9.95706 0 10.3231 0.241105 10.4839 0.613578L12.6639 5.69595L18.1769 6.19456C18.5829 6.231 18.925 6.50462 19.0508 6.88986C19.1766 7.27511 19.0603 7.69766 18.754 7.96402L14.5866 11.6035L15.8154 16.995C15.9055 17.3914 15.751 17.8013 15.4208 18.0391C15.0913 18.2768 14.6519 18.2951 14.3049 18.0874L9.55032 15.2573L4.79571 18.089C4.63496 18.1841 4.45586 18.2326 4.27515 18.2326ZM9.55032 14.0381C9.73103 14.0381 9.90999 14.0864 10.0709 14.1815L14.5581 16.8547L13.3983 11.766C13.3156 11.4038 13.439 11.0257 13.72 10.7806L17.6549 7.34333L12.4489 6.87245C12.0741 6.83833 11.7517 6.60362 11.6053 6.25959L9.55032 1.4642L7.49289 6.26032C7.34804 6.60202 7.02568 6.83674 6.65173 6.87085L1.44506 7.34174L5.3798 10.779C5.66164 11.0248 5.78493 11.4022 5.70142 11.7652L4.54257 16.8539L9.02977 14.1815C9.19051 14.0864 9.36962 14.0381 9.55032 14.0381ZM6.39467 5.79422L6.39379 5.79582L6.39467 5.79422ZM12.7044 5.7919L12.7053 5.7935L12.7044 5.7919Z" fill="#404F7A" />
                                        <path id="Vector_2" d="M27.5227 18.2326C27.323 18.2326 27.1246 18.1675 26.9553 18.0398C26.64 17.8013 26.4926 17.3914 26.5785 16.9958L27.7514 11.6043L23.7735 7.96402C23.4811 7.69766 23.3694 7.27584 23.4895 6.88986C23.6095 6.50462 23.9361 6.23187 24.3229 6.19456L29.5861 5.69595L31.667 0.614448C31.8204 0.241105 32.1699 0 32.5581 0C32.9464 0 33.2958 0.241105 33.4492 0.613578L35.5301 5.69595L40.7925 6.19456C41.1801 6.231 41.5067 6.50462 41.6268 6.88986C41.7468 7.27511 41.6358 7.69766 41.3434 7.96402L37.3655 11.6035L38.5385 16.995C38.6244 17.3914 38.477 17.8013 38.1618 18.0391C37.8472 18.2768 37.4278 18.2951 37.0966 18.0874L32.5581 15.2573L28.0196 18.089C27.8662 18.1841 27.6952 18.2326 27.5227 18.2326ZM32.5581 14.0381C32.7306 14.0381 32.9014 14.0864 33.055 14.1815L37.3382 16.8547L36.2312 11.766C36.1522 11.4038 36.27 11.0257 36.5382 10.7806L40.2943 7.34333L35.3249 6.87245C34.9672 6.83833 34.6595 6.60362 34.5197 6.25959L32.5581 1.4642L30.5942 6.26032C30.4559 6.60202 30.1482 6.83674 29.7913 6.87085L24.8213 7.34174L28.5772 10.779C28.8462 11.0248 28.9639 11.4022 28.8842 11.7652L27.778 16.8539L32.0612 14.1815C32.2147 14.0864 32.3856 14.0381 32.5581 14.0381ZM29.5459 5.79422C29.5459 5.79422 29.5459 5.79509 29.5451 5.79582L29.5459 5.79422ZM35.5688 5.7919L35.5696 5.7935C35.5696 5.79262 35.5696 5.79262 35.5688 5.7919Z" fill="#404F7A" />
                                        <path id="Vector_3" d="M50.9646 18.2326C50.7649 18.2326 50.5665 18.1675 50.3972 18.0398C50.0818 17.8013 49.9345 17.3914 50.0204 16.9958L51.1933 11.6043L47.2154 7.96402C46.923 7.69766 46.8113 7.27584 46.9314 6.88986C47.0514 6.50462 47.378 6.23187 47.7647 6.19456L53.028 5.69595L55.1089 0.614448C55.2623 0.241105 55.6118 0 56 0C56.3883 0 56.7377 0.241105 56.8911 0.613578L58.972 5.69595L64.2344 6.19456C64.622 6.231 64.9486 6.50462 65.0687 6.88986C65.1887 7.27511 65.0777 7.69766 64.7853 7.96402L60.8074 11.6035L61.9803 16.995C62.0663 17.3914 61.9189 17.8013 61.6036 18.0391C61.2891 18.2768 60.8697 18.2951 60.5385 18.0874L56 15.2573L51.4615 18.089C51.3081 18.1841 51.1371 18.2326 50.9646 18.2326ZM56 14.0381C56.1725 14.0381 56.3433 14.0864 56.4969 14.1815L60.7801 16.8547L59.6731 11.766C59.5941 11.4038 59.7119 11.0257 59.9801 10.7806L63.7362 7.34333L58.7668 6.87245C58.4091 6.83833 58.1014 6.60362 57.9616 6.25959L56 1.4642L54.0361 6.26032C53.8978 6.60202 53.5901 6.83674 53.2332 6.87085L48.2632 7.34174L52.019 10.779C52.2881 11.0248 52.4058 11.4022 52.3261 11.7652L51.2199 16.8539L55.5031 14.1815C55.6566 14.0864 55.8275 14.0381 56 14.0381ZM52.9878 5.79422C52.9878 5.79422 52.9878 5.79509 52.987 5.79582L52.9878 5.79422ZM59.0107 5.7919L59.0115 5.7935C59.0115 5.79262 59.0115 5.79262 59.0107 5.7919Z" fill="#404F7A" />
                                        <path id="Vector_4" d="M75.2747 18.2326C75.0749 18.2326 74.8766 18.1675 74.7073 18.0398C74.3919 17.8013 74.2446 17.3914 74.3304 16.9958L75.5034 11.6043L71.5255 7.96402C71.2331 7.69766 71.1214 7.27584 71.2414 6.88986C71.3615 6.50462 71.6881 6.23187 72.0748 6.19456L77.338 5.69595L79.4189 0.614448C79.5724 0.241105 79.9218 0 80.3101 0C80.6983 0 81.0477 0.241105 81.2012 0.613578L83.2821 5.69595L88.5445 6.19456C88.932 6.231 89.2587 6.50462 89.3787 6.88986C89.4988 7.27511 89.3878 7.69766 89.0954 7.96402L85.1175 11.6035L86.2904 16.995C86.3764 17.3914 86.2289 17.8013 85.9137 18.0391C85.5992 18.2768 85.1798 18.2951 84.8486 18.0874L80.3101 15.2573L75.7716 18.089C75.6181 18.1841 75.4472 18.2326 75.2747 18.2326ZM80.3101 14.0381C80.4826 14.0381 80.6534 14.0864 80.807 14.1815L85.0902 16.8547L83.9832 11.766C83.9042 11.4038 84.022 11.0257 84.2902 10.7806L88.0462 7.34333L83.0769 6.87245C82.7191 6.83833 82.4114 6.60362 82.2716 6.25959L80.3101 1.4642L78.3462 6.26032C78.2079 6.60202 77.9002 6.83674 77.5432 6.87085L72.5732 7.34174L76.3291 10.779C76.5981 11.0248 76.7158 11.4022 76.6361 11.7652L75.5299 16.8539L79.8132 14.1815C79.9666 14.0864 80.1376 14.0381 80.3101 14.0381ZM77.2978 5.79422C77.2978 5.79422 77.2978 5.79509 77.297 5.79582L77.2978 5.79422ZM83.3208 5.7919L83.3216 5.7935C83.3216 5.79262 83.3216 5.79262 83.3208 5.7919Z" fill="#404F7A" />
                                        <path id="Vector_5" d="M97.1743 18.2326C96.9651 18.2326 96.7572 18.1675 96.5799 18.0398C96.2495 17.8013 96.0952 17.3914 96.1851 16.9958L97.4139 11.6043L93.2466 7.96402C92.9403 7.69766 92.8232 7.27584 92.949 6.88986C93.0748 6.50462 93.4169 6.23187 93.8221 6.19456L99.336 5.69595L101.516 0.614448C101.677 0.241105 102.043 0 102.449 0C102.856 0 103.222 0.241105 103.383 0.613578L105.563 5.69595L111.076 6.19456C111.482 6.231 111.824 6.50462 111.95 6.88986C112.076 7.27511 111.959 7.69766 111.653 7.96402L107.486 11.6035L108.715 16.995C108.805 17.3914 108.65 17.8013 108.32 18.0391C107.99 18.2768 107.551 18.2951 107.204 18.0874L102.449 15.2573L97.6949 18.089C97.5341 18.1841 97.355 18.2326 97.1743 18.2326ZM102.449 14.0381C102.63 14.0381 102.809 14.0864 102.97 14.1815L107.457 16.8547L106.298 11.766C106.215 11.4038 106.338 11.0257 106.619 10.7806L110.554 7.34333L105.348 6.87245C104.973 6.83833 104.651 6.60362 104.504 6.25959L102.449 1.4642L100.392 6.26032C100.247 6.60202 99.9249 6.83674 99.5509 6.87085L94.3442 7.34174L98.279 10.779C98.5608 11.0248 98.6841 11.4022 98.6006 11.7652L97.4417 16.8539L101.929 14.1815C102.09 14.0864 102.269 14.0381 102.449 14.0381ZM99.2938 5.79422C99.2938 5.79422 99.2938 5.79509 99.293 5.79582L99.2938 5.79422ZM105.604 5.7919L105.604 5.7935C105.604 5.79262 105.604 5.79262 105.604 5.7919Z" fill="#404F7A" />
                                    </g>
                                </svg>

                            </div>
                        </div>
                        <div className="flex justify-center items-center" >
                            <button className="py-2 px-6" style={{ border: "1px solid #942D3B", backgroundColor: "#F8F1EF", fontSize: "14px", fontWeight: "500", color: "#942D3B" }} >Show Detail</button>
                        </div>
                    </div>
                    <div style={{ border: "1px #942D3B dotted" }} className=" w-[370px] h-[320px] bg-[#FAF4F3] opacity-[10]" >
                        <p className="py-[30px] px-[70px]" style={{ color: "#404F74", fontSize: "16px", fontWeight: "700", lineHeight: "22px", textWrap: "nowrap", textAlign: "center" }} >Inventory Management Product</p>
                        <p className="py-[0px] px-[30px]" style={{ color: "#404F74", fontSize: "14px", fontWeight: "400", lineHeight: "22px", wordWrap: "break-word" }} >Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...</p>
                        <div className="grid grid-cols-2 py-[30px]" >
                            <div className="flex flex-1 justify-center items-start" >
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.77 14.7251H13.9068C12.1026 14.7251 10.6346 13.2572 10.6346 11.4529C10.6346 9.64869 12.1026 8.18077 13.9068 8.18077H16.77C16.9961 8.18077 17.179 7.99782 17.179 7.77173V6.54466C17.179 5.68694 16.5137 4.98938 15.6732 4.92174L13.3241 0.818722C13.1064 0.439251 12.7549 0.16803 12.3343 0.0554074C11.9156 -0.0564478 11.4779 0.00229827 11.1032 0.220372L3.05042 4.90855H1.63611C0.733789 4.90855 0 5.6423 0 6.54466V16.3612C0 17.2635 0.73375 17.9973 1.63611 17.9973H15.5429C16.4452 17.9973 17.179 17.2636 17.179 16.3612V15.1342C17.179 14.9081 16.9961 14.7251 16.77 14.7251ZM13.8314 3.35186L14.7226 4.90855H11.1575L13.8314 3.35186ZM4.67629 4.90855L11.515 0.927357C11.6999 0.819106 11.916 0.790346 12.1225 0.845488C12.3315 0.901396 12.5056 1.03641 12.6139 1.22534L12.6147 1.22684L6.29108 4.90855H4.67629Z" fill="#404F7A" />
                                    <path d="M16.7712 8.99902H13.9076C12.5541 8.99902 11.4531 10.1 11.4531 11.4535C11.4531 12.807 12.5541 13.908 13.9076 13.908H16.7712C17.448 13.908 17.9985 13.3575 17.9985 12.6808V10.2263C17.9985 9.54952 17.448 8.99902 16.7712 8.99902ZM13.9076 12.2717C13.4566 12.2717 13.0895 11.9045 13.0895 11.4535C13.0895 11.0025 13.4566 10.6354 13.9076 10.6354C14.3586 10.6354 14.7258 11.0025 14.7258 11.4535C14.7258 11.9045 14.3587 12.2717 13.9076 12.2717Z" fill="#404F7A" />
                                </svg>
                                <p style={{ color: "#404F74", fontSize: "15px", fontWeight: "600", lineHeight: "22px", wordWrap: "break-word", marginLeft: "10px" }} >200$</p>
                            </div>
                            <div className="flex flex-1 justify-center items-end" >
                                <svg width="112" height="19" viewBox="0 0 112 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 6908">
                                        <path id="Vector" d="M4.27515 18.2326C4.06589 18.2326 3.85807 18.1675 3.68072 18.0398C3.35035 17.8013 3.19602 17.3914 3.28593 16.9958L4.51474 11.6043L0.347415 7.96402C0.0410883 7.69766 -0.0759337 7.27584 0.0498322 6.88986C0.175598 6.50462 0.517774 6.23187 0.922906 6.19456L6.43678 5.69595L8.61677 0.614448C8.77751 0.241105 9.14359 0 9.55032 0C9.95706 0 10.3231 0.241105 10.4839 0.613578L12.6639 5.69595L18.1769 6.19456C18.5829 6.231 18.925 6.50462 19.0508 6.88986C19.1766 7.27511 19.0603 7.69766 18.754 7.96402L14.5866 11.6035L15.8154 16.995C15.9055 17.3914 15.751 17.8013 15.4208 18.0391C15.0913 18.2768 14.6519 18.2951 14.3049 18.0874L9.55032 15.2573L4.79571 18.089C4.63496 18.1841 4.45586 18.2326 4.27515 18.2326ZM9.55032 14.0381C9.73103 14.0381 9.90999 14.0864 10.0709 14.1815L14.5581 16.8547L13.3983 11.766C13.3156 11.4038 13.439 11.0257 13.72 10.7806L17.6549 7.34333L12.4489 6.87245C12.0741 6.83833 11.7517 6.60362 11.6053 6.25959L9.55032 1.4642L7.49289 6.26032C7.34804 6.60202 7.02568 6.83674 6.65173 6.87085L1.44506 7.34174L5.3798 10.779C5.66164 11.0248 5.78493 11.4022 5.70142 11.7652L4.54257 16.8539L9.02977 14.1815C9.19051 14.0864 9.36962 14.0381 9.55032 14.0381ZM6.39467 5.79422L6.39379 5.79582L6.39467 5.79422ZM12.7044 5.7919L12.7053 5.7935L12.7044 5.7919Z" fill="#404F7A" />
                                        <path id="Vector_2" d="M27.5227 18.2326C27.323 18.2326 27.1246 18.1675 26.9553 18.0398C26.64 17.8013 26.4926 17.3914 26.5785 16.9958L27.7514 11.6043L23.7735 7.96402C23.4811 7.69766 23.3694 7.27584 23.4895 6.88986C23.6095 6.50462 23.9361 6.23187 24.3229 6.19456L29.5861 5.69595L31.667 0.614448C31.8204 0.241105 32.1699 0 32.5581 0C32.9464 0 33.2958 0.241105 33.4492 0.613578L35.5301 5.69595L40.7925 6.19456C41.1801 6.231 41.5067 6.50462 41.6268 6.88986C41.7468 7.27511 41.6358 7.69766 41.3434 7.96402L37.3655 11.6035L38.5385 16.995C38.6244 17.3914 38.477 17.8013 38.1618 18.0391C37.8472 18.2768 37.4278 18.2951 37.0966 18.0874L32.5581 15.2573L28.0196 18.089C27.8662 18.1841 27.6952 18.2326 27.5227 18.2326ZM32.5581 14.0381C32.7306 14.0381 32.9014 14.0864 33.055 14.1815L37.3382 16.8547L36.2312 11.766C36.1522 11.4038 36.27 11.0257 36.5382 10.7806L40.2943 7.34333L35.3249 6.87245C34.9672 6.83833 34.6595 6.60362 34.5197 6.25959L32.5581 1.4642L30.5942 6.26032C30.4559 6.60202 30.1482 6.83674 29.7913 6.87085L24.8213 7.34174L28.5772 10.779C28.8462 11.0248 28.9639 11.4022 28.8842 11.7652L27.778 16.8539L32.0612 14.1815C32.2147 14.0864 32.3856 14.0381 32.5581 14.0381ZM29.5459 5.79422C29.5459 5.79422 29.5459 5.79509 29.5451 5.79582L29.5459 5.79422ZM35.5688 5.7919L35.5696 5.7935C35.5696 5.79262 35.5696 5.79262 35.5688 5.7919Z" fill="#404F7A" />
                                        <path id="Vector_3" d="M50.9646 18.2326C50.7649 18.2326 50.5665 18.1675 50.3972 18.0398C50.0818 17.8013 49.9345 17.3914 50.0204 16.9958L51.1933 11.6043L47.2154 7.96402C46.923 7.69766 46.8113 7.27584 46.9314 6.88986C47.0514 6.50462 47.378 6.23187 47.7647 6.19456L53.028 5.69595L55.1089 0.614448C55.2623 0.241105 55.6118 0 56 0C56.3883 0 56.7377 0.241105 56.8911 0.613578L58.972 5.69595L64.2344 6.19456C64.622 6.231 64.9486 6.50462 65.0687 6.88986C65.1887 7.27511 65.0777 7.69766 64.7853 7.96402L60.8074 11.6035L61.9803 16.995C62.0663 17.3914 61.9189 17.8013 61.6036 18.0391C61.2891 18.2768 60.8697 18.2951 60.5385 18.0874L56 15.2573L51.4615 18.089C51.3081 18.1841 51.1371 18.2326 50.9646 18.2326ZM56 14.0381C56.1725 14.0381 56.3433 14.0864 56.4969 14.1815L60.7801 16.8547L59.6731 11.766C59.5941 11.4038 59.7119 11.0257 59.9801 10.7806L63.7362 7.34333L58.7668 6.87245C58.4091 6.83833 58.1014 6.60362 57.9616 6.25959L56 1.4642L54.0361 6.26032C53.8978 6.60202 53.5901 6.83674 53.2332 6.87085L48.2632 7.34174L52.019 10.779C52.2881 11.0248 52.4058 11.4022 52.3261 11.7652L51.2199 16.8539L55.5031 14.1815C55.6566 14.0864 55.8275 14.0381 56 14.0381ZM52.9878 5.79422C52.9878 5.79422 52.9878 5.79509 52.987 5.79582L52.9878 5.79422ZM59.0107 5.7919L59.0115 5.7935C59.0115 5.79262 59.0115 5.79262 59.0107 5.7919Z" fill="#404F7A" />
                                        <path id="Vector_4" d="M75.2747 18.2326C75.0749 18.2326 74.8766 18.1675 74.7073 18.0398C74.3919 17.8013 74.2446 17.3914 74.3304 16.9958L75.5034 11.6043L71.5255 7.96402C71.2331 7.69766 71.1214 7.27584 71.2414 6.88986C71.3615 6.50462 71.6881 6.23187 72.0748 6.19456L77.338 5.69595L79.4189 0.614448C79.5724 0.241105 79.9218 0 80.3101 0C80.6983 0 81.0477 0.241105 81.2012 0.613578L83.2821 5.69595L88.5445 6.19456C88.932 6.231 89.2587 6.50462 89.3787 6.88986C89.4988 7.27511 89.3878 7.69766 89.0954 7.96402L85.1175 11.6035L86.2904 16.995C86.3764 17.3914 86.2289 17.8013 85.9137 18.0391C85.5992 18.2768 85.1798 18.2951 84.8486 18.0874L80.3101 15.2573L75.7716 18.089C75.6181 18.1841 75.4472 18.2326 75.2747 18.2326ZM80.3101 14.0381C80.4826 14.0381 80.6534 14.0864 80.807 14.1815L85.0902 16.8547L83.9832 11.766C83.9042 11.4038 84.022 11.0257 84.2902 10.7806L88.0462 7.34333L83.0769 6.87245C82.7191 6.83833 82.4114 6.60362 82.2716 6.25959L80.3101 1.4642L78.3462 6.26032C78.2079 6.60202 77.9002 6.83674 77.5432 6.87085L72.5732 7.34174L76.3291 10.779C76.5981 11.0248 76.7158 11.4022 76.6361 11.7652L75.5299 16.8539L79.8132 14.1815C79.9666 14.0864 80.1376 14.0381 80.3101 14.0381ZM77.2978 5.79422C77.2978 5.79422 77.2978 5.79509 77.297 5.79582L77.2978 5.79422ZM83.3208 5.7919L83.3216 5.7935C83.3216 5.79262 83.3216 5.79262 83.3208 5.7919Z" fill="#404F7A" />
                                        <path id="Vector_5" d="M97.1743 18.2326C96.9651 18.2326 96.7572 18.1675 96.5799 18.0398C96.2495 17.8013 96.0952 17.3914 96.1851 16.9958L97.4139 11.6043L93.2466 7.96402C92.9403 7.69766 92.8232 7.27584 92.949 6.88986C93.0748 6.50462 93.4169 6.23187 93.8221 6.19456L99.336 5.69595L101.516 0.614448C101.677 0.241105 102.043 0 102.449 0C102.856 0 103.222 0.241105 103.383 0.613578L105.563 5.69595L111.076 6.19456C111.482 6.231 111.824 6.50462 111.95 6.88986C112.076 7.27511 111.959 7.69766 111.653 7.96402L107.486 11.6035L108.715 16.995C108.805 17.3914 108.65 17.8013 108.32 18.0391C107.99 18.2768 107.551 18.2951 107.204 18.0874L102.449 15.2573L97.6949 18.089C97.5341 18.1841 97.355 18.2326 97.1743 18.2326ZM102.449 14.0381C102.63 14.0381 102.809 14.0864 102.97 14.1815L107.457 16.8547L106.298 11.766C106.215 11.4038 106.338 11.0257 106.619 10.7806L110.554 7.34333L105.348 6.87245C104.973 6.83833 104.651 6.60362 104.504 6.25959L102.449 1.4642L100.392 6.26032C100.247 6.60202 99.9249 6.83674 99.5509 6.87085L94.3442 7.34174L98.279 10.779C98.5608 11.0248 98.6841 11.4022 98.6006 11.7652L97.4417 16.8539L101.929 14.1815C102.09 14.0864 102.269 14.0381 102.449 14.0381ZM99.2938 5.79422C99.2938 5.79422 99.2938 5.79509 99.293 5.79582L99.2938 5.79422ZM105.604 5.7919L105.604 5.7935C105.604 5.79262 105.604 5.79262 105.604 5.7919Z" fill="#404F7A" />
                                    </g>
                                </svg>

                            </div>
                        </div>
                        <div className="flex justify-center items-center" >
                            <button className="py-2 px-6" style={{ border: "1px solid #942D3B", backgroundColor: "#F8F1EF", fontSize: "14px", fontWeight: "500", color: "#942D3B" }} >Show Detail</button>
                        </div>
                    </div>
                    <div className=" w-[370px] h-[320px] bg-[#FAF4F3] opacity-[10]" >
                        <p className="py-[30px] px-[70px]" style={{ color: "#404F74", fontSize: "16px", fontWeight: "700", lineHeight: "22px", wordWrap: "break-word" }} >Hsopital Management System</p>
                        <p className="py-[0px] px-[30px]" style={{ color: "#404F74", fontSize: "14px", fontWeight: "400", lineHeight: "22px", wordWrap: "break-word" }} >Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...</p>
                        <div className="grid grid-cols-2 py-[20px]" >
                            <div className="flex flex-1 justify-center items-start" >
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.77 14.7251H13.9068C12.1026 14.7251 10.6346 13.2572 10.6346 11.4529C10.6346 9.64869 12.1026 8.18077 13.9068 8.18077H16.77C16.9961 8.18077 17.179 7.99782 17.179 7.77173V6.54466C17.179 5.68694 16.5137 4.98938 15.6732 4.92174L13.3241 0.818722C13.1064 0.439251 12.7549 0.16803 12.3343 0.0554074C11.9156 -0.0564478 11.4779 0.00229827 11.1032 0.220372L3.05042 4.90855H1.63611C0.733789 4.90855 0 5.6423 0 6.54466V16.3612C0 17.2635 0.73375 17.9973 1.63611 17.9973H15.5429C16.4452 17.9973 17.179 17.2636 17.179 16.3612V15.1342C17.179 14.9081 16.9961 14.7251 16.77 14.7251ZM13.8314 3.35186L14.7226 4.90855H11.1575L13.8314 3.35186ZM4.67629 4.90855L11.515 0.927357C11.6999 0.819106 11.916 0.790346 12.1225 0.845488C12.3315 0.901396 12.5056 1.03641 12.6139 1.22534L12.6147 1.22684L6.29108 4.90855H4.67629Z" fill="#404F7A" />
                                    <path d="M16.7712 8.99902H13.9076C12.5541 8.99902 11.4531 10.1 11.4531 11.4535C11.4531 12.807 12.5541 13.908 13.9076 13.908H16.7712C17.448 13.908 17.9985 13.3575 17.9985 12.6808V10.2263C17.9985 9.54952 17.448 8.99902 16.7712 8.99902ZM13.9076 12.2717C13.4566 12.2717 13.0895 11.9045 13.0895 11.4535C13.0895 11.0025 13.4566 10.6354 13.9076 10.6354C14.3586 10.6354 14.7258 11.0025 14.7258 11.4535C14.7258 11.9045 14.3587 12.2717 13.9076 12.2717Z" fill="#404F7A" />
                                </svg>
                                <p style={{ color: "#404F74", fontSize: "15px", fontWeight: "600", lineHeight: "22px", wordWrap: "break-word", marginLeft: "10px" }} >200$</p>
                            </div>
                            <div className="flex flex-1 justify-center items-end" >
                                <svg width="112" height="19" viewBox="0 0 112 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 6908">
                                        <path id="Vector" d="M4.27515 18.2326C4.06589 18.2326 3.85807 18.1675 3.68072 18.0398C3.35035 17.8013 3.19602 17.3914 3.28593 16.9958L4.51474 11.6043L0.347415 7.96402C0.0410883 7.69766 -0.0759337 7.27584 0.0498322 6.88986C0.175598 6.50462 0.517774 6.23187 0.922906 6.19456L6.43678 5.69595L8.61677 0.614448C8.77751 0.241105 9.14359 0 9.55032 0C9.95706 0 10.3231 0.241105 10.4839 0.613578L12.6639 5.69595L18.1769 6.19456C18.5829 6.231 18.925 6.50462 19.0508 6.88986C19.1766 7.27511 19.0603 7.69766 18.754 7.96402L14.5866 11.6035L15.8154 16.995C15.9055 17.3914 15.751 17.8013 15.4208 18.0391C15.0913 18.2768 14.6519 18.2951 14.3049 18.0874L9.55032 15.2573L4.79571 18.089C4.63496 18.1841 4.45586 18.2326 4.27515 18.2326ZM9.55032 14.0381C9.73103 14.0381 9.90999 14.0864 10.0709 14.1815L14.5581 16.8547L13.3983 11.766C13.3156 11.4038 13.439 11.0257 13.72 10.7806L17.6549 7.34333L12.4489 6.87245C12.0741 6.83833 11.7517 6.60362 11.6053 6.25959L9.55032 1.4642L7.49289 6.26032C7.34804 6.60202 7.02568 6.83674 6.65173 6.87085L1.44506 7.34174L5.3798 10.779C5.66164 11.0248 5.78493 11.4022 5.70142 11.7652L4.54257 16.8539L9.02977 14.1815C9.19051 14.0864 9.36962 14.0381 9.55032 14.0381ZM6.39467 5.79422L6.39379 5.79582L6.39467 5.79422ZM12.7044 5.7919L12.7053 5.7935L12.7044 5.7919Z" fill="#404F7A" />
                                        <path id="Vector_2" d="M27.5227 18.2326C27.323 18.2326 27.1246 18.1675 26.9553 18.0398C26.64 17.8013 26.4926 17.3914 26.5785 16.9958L27.7514 11.6043L23.7735 7.96402C23.4811 7.69766 23.3694 7.27584 23.4895 6.88986C23.6095 6.50462 23.9361 6.23187 24.3229 6.19456L29.5861 5.69595L31.667 0.614448C31.8204 0.241105 32.1699 0 32.5581 0C32.9464 0 33.2958 0.241105 33.4492 0.613578L35.5301 5.69595L40.7925 6.19456C41.1801 6.231 41.5067 6.50462 41.6268 6.88986C41.7468 7.27511 41.6358 7.69766 41.3434 7.96402L37.3655 11.6035L38.5385 16.995C38.6244 17.3914 38.477 17.8013 38.1618 18.0391C37.8472 18.2768 37.4278 18.2951 37.0966 18.0874L32.5581 15.2573L28.0196 18.089C27.8662 18.1841 27.6952 18.2326 27.5227 18.2326ZM32.5581 14.0381C32.7306 14.0381 32.9014 14.0864 33.055 14.1815L37.3382 16.8547L36.2312 11.766C36.1522 11.4038 36.27 11.0257 36.5382 10.7806L40.2943 7.34333L35.3249 6.87245C34.9672 6.83833 34.6595 6.60362 34.5197 6.25959L32.5581 1.4642L30.5942 6.26032C30.4559 6.60202 30.1482 6.83674 29.7913 6.87085L24.8213 7.34174L28.5772 10.779C28.8462 11.0248 28.9639 11.4022 28.8842 11.7652L27.778 16.8539L32.0612 14.1815C32.2147 14.0864 32.3856 14.0381 32.5581 14.0381ZM29.5459 5.79422C29.5459 5.79422 29.5459 5.79509 29.5451 5.79582L29.5459 5.79422ZM35.5688 5.7919L35.5696 5.7935C35.5696 5.79262 35.5696 5.79262 35.5688 5.7919Z" fill="#404F7A" />
                                        <path id="Vector_3" d="M50.9646 18.2326C50.7649 18.2326 50.5665 18.1675 50.3972 18.0398C50.0818 17.8013 49.9345 17.3914 50.0204 16.9958L51.1933 11.6043L47.2154 7.96402C46.923 7.69766 46.8113 7.27584 46.9314 6.88986C47.0514 6.50462 47.378 6.23187 47.7647 6.19456L53.028 5.69595L55.1089 0.614448C55.2623 0.241105 55.6118 0 56 0C56.3883 0 56.7377 0.241105 56.8911 0.613578L58.972 5.69595L64.2344 6.19456C64.622 6.231 64.9486 6.50462 65.0687 6.88986C65.1887 7.27511 65.0777 7.69766 64.7853 7.96402L60.8074 11.6035L61.9803 16.995C62.0663 17.3914 61.9189 17.8013 61.6036 18.0391C61.2891 18.2768 60.8697 18.2951 60.5385 18.0874L56 15.2573L51.4615 18.089C51.3081 18.1841 51.1371 18.2326 50.9646 18.2326ZM56 14.0381C56.1725 14.0381 56.3433 14.0864 56.4969 14.1815L60.7801 16.8547L59.6731 11.766C59.5941 11.4038 59.7119 11.0257 59.9801 10.7806L63.7362 7.34333L58.7668 6.87245C58.4091 6.83833 58.1014 6.60362 57.9616 6.25959L56 1.4642L54.0361 6.26032C53.8978 6.60202 53.5901 6.83674 53.2332 6.87085L48.2632 7.34174L52.019 10.779C52.2881 11.0248 52.4058 11.4022 52.3261 11.7652L51.2199 16.8539L55.5031 14.1815C55.6566 14.0864 55.8275 14.0381 56 14.0381ZM52.9878 5.79422C52.9878 5.79422 52.9878 5.79509 52.987 5.79582L52.9878 5.79422ZM59.0107 5.7919L59.0115 5.7935C59.0115 5.79262 59.0115 5.79262 59.0107 5.7919Z" fill="#404F7A" />
                                        <path id="Vector_4" d="M75.2747 18.2326C75.0749 18.2326 74.8766 18.1675 74.7073 18.0398C74.3919 17.8013 74.2446 17.3914 74.3304 16.9958L75.5034 11.6043L71.5255 7.96402C71.2331 7.69766 71.1214 7.27584 71.2414 6.88986C71.3615 6.50462 71.6881 6.23187 72.0748 6.19456L77.338 5.69595L79.4189 0.614448C79.5724 0.241105 79.9218 0 80.3101 0C80.6983 0 81.0477 0.241105 81.2012 0.613578L83.2821 5.69595L88.5445 6.19456C88.932 6.231 89.2587 6.50462 89.3787 6.88986C89.4988 7.27511 89.3878 7.69766 89.0954 7.96402L85.1175 11.6035L86.2904 16.995C86.3764 17.3914 86.2289 17.8013 85.9137 18.0391C85.5992 18.2768 85.1798 18.2951 84.8486 18.0874L80.3101 15.2573L75.7716 18.089C75.6181 18.1841 75.4472 18.2326 75.2747 18.2326ZM80.3101 14.0381C80.4826 14.0381 80.6534 14.0864 80.807 14.1815L85.0902 16.8547L83.9832 11.766C83.9042 11.4038 84.022 11.0257 84.2902 10.7806L88.0462 7.34333L83.0769 6.87245C82.7191 6.83833 82.4114 6.60362 82.2716 6.25959L80.3101 1.4642L78.3462 6.26032C78.2079 6.60202 77.9002 6.83674 77.5432 6.87085L72.5732 7.34174L76.3291 10.779C76.5981 11.0248 76.7158 11.4022 76.6361 11.7652L75.5299 16.8539L79.8132 14.1815C79.9666 14.0864 80.1376 14.0381 80.3101 14.0381ZM77.2978 5.79422C77.2978 5.79422 77.2978 5.79509 77.297 5.79582L77.2978 5.79422ZM83.3208 5.7919L83.3216 5.7935C83.3216 5.79262 83.3216 5.79262 83.3208 5.7919Z" fill="#404F7A" />
                                        <path id="Vector_5" d="M97.1743 18.2326C96.9651 18.2326 96.7572 18.1675 96.5799 18.0398C96.2495 17.8013 96.0952 17.3914 96.1851 16.9958L97.4139 11.6043L93.2466 7.96402C92.9403 7.69766 92.8232 7.27584 92.949 6.88986C93.0748 6.50462 93.4169 6.23187 93.8221 6.19456L99.336 5.69595L101.516 0.614448C101.677 0.241105 102.043 0 102.449 0C102.856 0 103.222 0.241105 103.383 0.613578L105.563 5.69595L111.076 6.19456C111.482 6.231 111.824 6.50462 111.95 6.88986C112.076 7.27511 111.959 7.69766 111.653 7.96402L107.486 11.6035L108.715 16.995C108.805 17.3914 108.65 17.8013 108.32 18.0391C107.99 18.2768 107.551 18.2951 107.204 18.0874L102.449 15.2573L97.6949 18.089C97.5341 18.1841 97.355 18.2326 97.1743 18.2326ZM102.449 14.0381C102.63 14.0381 102.809 14.0864 102.97 14.1815L107.457 16.8547L106.298 11.766C106.215 11.4038 106.338 11.0257 106.619 10.7806L110.554 7.34333L105.348 6.87245C104.973 6.83833 104.651 6.60362 104.504 6.25959L102.449 1.4642L100.392 6.26032C100.247 6.60202 99.9249 6.83674 99.5509 6.87085L94.3442 7.34174L98.279 10.779C98.5608 11.0248 98.6841 11.4022 98.6006 11.7652L97.4417 16.8539L101.929 14.1815C102.09 14.0864 102.269 14.0381 102.449 14.0381ZM99.2938 5.79422C99.2938 5.79422 99.2938 5.79509 99.293 5.79582L99.2938 5.79422ZM105.604 5.7919L105.604 5.7935C105.604 5.79262 105.604 5.79262 105.604 5.7919Z" fill="#404F7A" />
                                    </g>
                                </svg>

                            </div>
                        </div>
                        <div className="flex justify-center items-center" >
                            <button className="py-2 px-6" style={{ border: "1px solid #942D3B", backgroundColor: "#F8F1EF", fontSize: "14px", fontWeight: "500", color: "#942D3B" }} >Show Detail</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
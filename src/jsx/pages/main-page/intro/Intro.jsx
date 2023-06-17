import React from 'react'

const Intro = () => {
    return (
        <section className='intro'>
            <div className="item">
                <svg width="115" height="100" viewBox="0 0 115 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M110.872 33.2C110.872 33.2 110.872 33.2 110.872 32.95C106.862 23.3311 99.584 15.0264 90.0242 9.15932C80.4644 3.29222 69.0837 0.145857 57.4216 0.145857C45.7595 0.145857 34.3787 3.29222 24.8189 9.15932C15.2591 15.0264 7.98161 23.3311 3.9708 32.95C3.9708 32.95 3.9708 32.95 3.9708 33.2C-0.508334 44.0545 -0.508334 55.9455 3.9708 66.8C3.9708 66.8 3.9708 66.8 3.9708 67.05C7.98161 76.6689 15.2591 84.9736 24.8189 90.8407C34.3787 96.7078 45.7595 99.8541 57.4216 99.8541C69.0837 99.8541 80.4644 96.7078 90.0242 90.8407C99.584 84.9736 106.862 76.6689 110.872 67.05C110.872 67.05 110.872 67.05 110.872 66.8C115.351 55.9455 115.351 44.0545 110.872 33.2ZM13.2493 60C11.2753 53.4461 11.2753 46.5539 13.2493 40H23.837C22.9264 46.6427 22.9264 53.3573 23.837 60H13.2493ZM17.917 70H25.8862C27.2223 74.4592 29.132 78.7703 31.5785 82.85C25.996 79.5096 21.3295 75.1203 17.917 70ZM25.8862 30H17.917C21.2804 24.8954 25.8873 20.5073 31.4077 17.15C29.0201 21.2362 27.1678 25.5471 25.8862 30ZM51.6154 88.5C44.6239 83.9934 39.7136 77.4262 37.7831 70H51.6154V88.5ZM51.6154 60H35.3354C34.2732 53.366 34.2732 46.634 35.3354 40H51.6154V60ZM51.6154 30H37.7831C39.7136 22.5738 44.6239 16.0066 51.6154 11.5V30ZM96.6985 30H88.7293C87.3932 25.5408 85.4835 21.2297 83.037 17.15C88.6194 20.4903 93.286 24.8797 96.6985 30ZM63 11.5C69.9915 16.0066 74.9018 22.5738 76.8324 30H63V11.5ZM63 88.5V70H76.8324C74.9018 77.4262 69.9915 83.9934 63 88.5ZM79.28 60H63V40H79.28C80.3423 46.634 80.3423 53.366 79.28 60ZM83.2077 82.85C85.6542 78.7703 87.5639 74.4592 88.9 70H96.8693C93.4568 75.1203 88.7902 79.5096 83.2077 82.85ZM101.366 60H90.7785C91.2415 56.6823 91.4696 53.3425 91.4616 50C91.4678 46.6575 91.2397 43.3179 90.7785 40H101.366C103.34 46.5539 103.34 53.4461 101.366 60Z" fill="#0F8B8D" />
                </svg>

                <h1>آموزش مجازی</h1>
            </div>

            <div className="item">
                <svg width="140" height="120" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M136.317 19.437L71.7023 0.246237C70.5969 -0.082079 69.4019 -0.082079 68.2965 0.246237L3.6817 19.437C2.60953 19.7554 1.67701 20.3664 1.01623 21.1834C0.355447 22.0003 -8.37454e-05 22.9818 1.47965e-08 23.9888V71.9656C1.47965e-08 73.2381 0.567301 74.4584 1.5771 75.3581C2.58691 76.2579 3.95649 76.7633 5.38457 76.7633C6.81265 76.7633 8.18223 76.2579 9.19203 75.3581C10.2018 74.4584 10.7691 73.2381 10.7691 71.9656V30.6456L33.3776 37.3563C27.3708 46.003 25.4607 56.4202 28.0666 66.3206C30.6726 76.221 37.5815 84.7953 47.2765 90.1609C35.1612 94.3948 24.6882 102.053 17.0287 112.524C16.6303 113.052 16.3537 113.644 16.2147 114.268C16.0757 114.892 16.0773 115.534 16.2193 116.157C16.3612 116.78 16.6408 117.372 17.0417 117.898C17.4426 118.424 17.9569 118.873 18.5546 119.221C19.1523 119.568 19.8215 119.806 20.5233 119.921C21.2252 120.036 21.9457 120.025 22.6429 119.89C23.3401 119.755 24.0002 119.497 24.5847 119.132C25.1693 118.768 25.6666 118.303 26.0479 117.766C36.191 103.9 52.2101 95.9541 69.9994 95.9541C87.7887 95.9541 103.808 103.9 113.951 117.766C114.741 118.811 115.961 119.538 117.347 119.789C118.734 120.04 120.175 119.794 121.36 119.106C122.545 118.417 123.378 117.341 123.679 116.109C123.981 114.877 123.726 113.59 122.97 112.524C115.311 102.053 104.797 94.3948 92.7223 90.1609C102.408 84.7955 109.31 76.2268 111.916 66.3336C114.521 56.4405 112.617 46.0304 106.621 37.3863L136.317 28.5706C137.389 28.2523 138.322 27.6414 138.983 26.8244C139.644 26.0075 140 25.0259 140 24.0188C140 23.0117 139.644 22.0301 138.983 21.2131C138.322 20.3961 137.389 19.7852 136.317 19.467V19.437ZM102.307 57.5726C102.308 62.1235 101.099 66.6099 98.7773 70.6637C96.456 74.7175 93.089 78.2231 88.9526 80.8929C84.8162 83.5627 80.0284 85.3206 74.9818 86.0225C69.9353 86.7243 64.7739 86.3501 59.9212 84.9304C55.0684 83.5108 50.6625 81.0862 47.0651 77.8556C43.4677 74.6249 40.7812 70.6804 39.226 66.3455C37.6708 62.0107 37.2913 57.4091 38.1186 52.9182C38.9459 48.4274 40.9564 44.1753 43.9852 40.5108L68.2965 47.7074C69.4019 48.0357 70.5969 48.0357 71.7023 47.7074L96.0136 40.5108C100.104 45.4524 102.31 51.4321 102.307 57.5726ZM69.9994 38.124L22.4133 23.9888L69.9994 9.8536L117.586 23.9888L69.9994 38.124Z" fill="#CCCCCC" />
                </svg>


                <h1>معاونت داشنجویی و فرهنگی</h1>
            </div>

            <div className="item">
                <svg width="135" height="120" viewBox="0 0 135 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M61.6532 45H84.0726C85.5591 45 86.9847 44.4732 88.0358 43.5355C89.0869 42.5979 89.6774 41.3261 89.6774 40C89.6774 38.6739 89.0869 37.4021 88.0358 36.4645C86.9847 35.5268 85.5591 35 84.0726 35H72.8629V30C72.8629 28.6739 72.2724 27.4021 71.2213 26.4645C70.1702 25.5268 68.7445 25 67.258 25C65.7715 25 64.3459 25.5268 63.2948 26.4645C62.2437 27.4021 61.6532 28.6739 61.6532 30V35C57.1937 35 52.9169 36.5804 49.7635 39.3934C46.6102 42.2064 44.8387 46.0218 44.8387 50C44.8387 53.9782 46.6102 57.7936 49.7635 60.6066C52.9169 63.4197 57.1937 65 61.6532 65H72.8629C74.3494 65 75.775 65.5268 76.8261 66.4645C77.8772 67.4021 78.4677 68.6739 78.4677 70C78.4677 71.3261 77.8772 72.5979 76.8261 73.5355C75.775 74.4732 74.3494 75 72.8629 75H50.4435C48.957 75 47.5314 75.5268 46.4803 76.4645C45.4292 77.4021 44.8387 78.6739 44.8387 80C44.8387 81.3261 45.4292 82.5979 46.4803 83.5355C47.5314 84.4732 48.957 85 50.4435 85H61.6532V90C61.6532 91.3261 62.2437 92.5979 63.2948 93.5355C64.3459 94.4732 65.7715 95 67.258 95C68.7445 95 70.1702 94.4732 71.2213 93.5355C72.2724 92.5979 72.8629 91.3261 72.8629 90V85C77.3224 85 81.5992 83.4196 84.7525 80.6066C87.9059 77.7936 89.6774 73.9782 89.6774 70C89.6774 66.0218 87.9059 62.2064 84.7525 59.3934C81.5992 56.5803 77.3224 55 72.8629 55H61.6532C60.1667 55 58.7411 54.4732 57.69 53.5355C56.6389 52.5979 56.0484 51.3261 56.0484 50C56.0484 48.6739 56.6389 47.4021 57.69 46.4645C58.7411 45.5268 60.1667 45 61.6532 45ZM67.258 5C55.0642 5 43.1442 8.22569 33.0054 14.2692C22.8665 20.3126 14.9643 28.9025 10.2979 38.9524C5.63151 49.0023 4.41057 60.061 6.78947 70.73C9.16838 81.3989 15.0403 91.199 23.6626 98.8909C32.285 106.583 43.2705 111.821 55.2301 113.943C67.1897 116.065 79.5861 114.976 90.8517 110.813C102.117 106.651 111.746 99.6011 118.521 90.5564C125.295 81.5117 128.911 70.878 128.911 60C128.911 45.4131 122.416 31.4236 110.853 21.1091C99.2912 10.7946 83.6095 5 67.258 5ZM67.258 105C57.2813 105 47.5285 102.361 39.2331 97.4161C30.9377 92.4715 24.4722 85.4434 20.6543 77.2208C16.8363 68.9981 15.8374 59.9501 17.7838 51.2209C19.7301 42.4918 24.5344 34.4736 31.5891 28.1802C38.6437 21.8868 47.6319 17.601 57.417 15.8647C67.2021 14.1283 77.3446 15.0195 86.562 18.4254C95.7793 21.8314 103.658 27.5991 109.2 34.9993C114.743 42.3996 117.702 51.0998 117.702 60C117.702 71.9347 112.387 83.3807 102.927 91.8198C93.467 100.259 80.6365 105 67.258 105Z" fill="#0F8B8D" />
                </svg>


                <h1>معاونت اداری ئ مالی</h1>
            </div>

            <div className="item">
                <svg width="148" height="128" viewBox="0 0 148 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.0046 75.999C35.9492 76.0029 32.9315 76.5784 30.1622 77.6851C27.393 78.7919 24.9389 80.4034 22.9711 82.4071C21.0034 84.4108 19.5695 86.7585 18.7695 89.2863C17.9694 91.814 17.8226 94.461 18.3391 97.0425C18.8557 99.6239 20.0232 102.078 21.7602 104.232C23.4972 106.387 25.7618 108.191 28.3961 109.518C31.0303 110.845 33.9706 111.663 37.0119 111.916C40.0531 112.168 43.122 111.849 46.0043 110.98" stroke="#CCCCCC" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19.8535 85.6292C15.6647 83.9005 12.0439 81.305 9.31795 78.0768C6.59204 74.8485 4.84679 71.0893 4.23973 67.1382C3.63267 63.1872 4.1829 59.1688 5.84076 55.4457C7.49862 51.7225 10.2119 48.4118 13.7358 45.8124M13.9458 45.3264C11.6502 42.3818 10.644 38.836 11.1055 35.3166C11.5669 31.7972 13.4661 28.5312 16.4669 26.0969C19.4677 23.6626 23.3765 22.2169 27.5014 22.0157C31.6263 21.8146 35.7012 22.871 39.0047 24.998M40.6706 25.388C39.554 23.3542 38.9848 21.1313 39.0052 18.8836C39.0256 16.6359 39.635 14.4209 40.7884 12.4023C41.9418 10.3836 43.6097 8.613 45.6688 7.22125C47.7279 5.8295 50.1256 4.85221 52.6846 4.36163C55.2436 3.87104 57.8985 3.87971 60.4531 4.38698C63.0077 4.89425 65.3966 5.88716 67.4433 7.29231C69.4899 8.69747 71.1421 10.4789 72.2775 12.505C73.4129 14.5312 74.0027 16.7501 74.0031 18.9979M74.0031 18.9979V112M74.0031 18.9979C74.0035 16.7501 74.5933 14.5312 75.7287 12.505C76.8642 10.4789 78.5163 8.69747 80.563 7.29231C82.6096 5.88716 84.9986 4.89425 87.5531 4.38698C90.1077 3.87971 92.7626 3.87104 95.3216 4.36163C97.8806 4.85221 100.278 5.8295 102.337 7.22125C104.396 8.613 106.064 10.3836 107.218 12.4023C108.371 14.4209 108.981 16.6359 109.001 18.8836C109.021 21.1313 108.452 23.3542 107.336 25.388M74.0031 112C74.0031 115.182 72.5282 118.235 69.9028 120.485C67.2774 122.736 63.7166 124 60.0037 124C56.2909 124 52.7301 122.736 50.1047 120.485C47.4793 118.235 46.0044 115.182 46.0044 112M74.0031 112C74.0031 115.182 75.478 118.235 78.1034 120.485C80.7288 122.736 84.2896 124 88.0025 124M74.0031 33.9982C74.0031 38.7722 76.2155 43.3506 80.1536 46.7263C84.0917 50.1021 89.4329 51.9985 95.0022 51.9985M134.27 45.8124C137.326 48.0628 139.778 50.8534 141.458 53.9926C143.137 57.1317 144.004 60.5452 144 63.9988C144 68.2169 142.733 72.1829 140.5 75.627M134.06 45.3264C136.356 42.3818 137.362 38.836 136.901 35.3166C136.439 31.7972 134.54 28.5312 131.539 26.0969C128.539 23.6626 124.63 22.2169 120.505 22.0157C116.38 21.8146 112.305 22.871 109.002 24.998M133.5 115L144 124M102.002 103C102.002 106.978 103.846 110.793 107.127 113.606C110.409 116.419 114.86 118 119.501 118C124.142 118 128.593 116.419 131.875 113.606C135.157 110.793 137 106.978 137 103C137 99.0212 135.157 95.2059 131.875 92.3928C128.593 89.5797 124.142 87.9993 119.501 87.9993C114.86 87.9993 110.409 89.5797 107.127 92.3928C103.846 95.2059 102.002 99.0212 102.002 103Z" stroke="#CCCCCC" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


                <h1>معاونت آموزشی و پژوهشی</h1>
            </div>

            <div className="item selected">
                <svg width="157" height="120" viewBox="0 0 157 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M142.013 23.6L126.117 11.45C124.892 10.5187 123.234 9.99604 121.506 9.99604C119.778 9.99604 118.12 10.5187 116.894 11.45L80.3932 39.35C79.787 39.8172 79.3073 40.3713 78.9818 40.9805C78.6563 41.5897 78.4913 42.242 78.4963 42.9V55C78.4963 56.3261 79.1854 57.5978 80.4122 58.5355C81.6389 59.4732 83.3027 60 85.0376 60H100.868C101.729 60.0038 102.582 59.8777 103.379 59.6288C104.176 59.38 104.901 59.0134 105.512 58.55L142.013 30.65C143.231 29.7132 143.915 28.4459 143.915 27.125C143.915 25.8041 143.231 24.5368 142.013 23.6ZM98.1203 50H91.579V45L121.538 22.1L128.08 27.1L98.1203 50ZM124.286 60C122.551 60 120.887 60.5268 119.66 61.4645C118.434 62.4021 117.744 63.6739 117.744 65C117.744 74.2826 112.92 83.185 104.333 89.7487C95.7457 96.3125 84.099 100 71.9549 100H35.3887L39.5752 96.85C40.1883 96.3852 40.6749 95.8322 41.007 95.2229C41.3391 94.6136 41.5101 93.9601 41.5101 93.3C41.5101 92.6399 41.3391 91.9864 41.007 91.3771C40.6749 90.7678 40.1883 90.2148 39.5752 89.75C33.1708 84.8551 28.8092 78.6185 27.0421 71.8288C25.2751 65.0392 26.1818 58.0015 29.6478 51.6057C33.1138 45.21 38.9832 39.7436 46.5139 35.8978C54.0445 32.0519 62.8981 29.9995 71.9549 30C73.6898 30 75.3536 29.4732 76.5803 28.5355C77.8071 27.5978 78.4963 26.3261 78.4963 25C78.4963 23.6739 77.8071 22.4021 76.5803 21.4645C75.3536 20.5268 73.6898 20 71.9549 20C60.8834 20.0278 50.0466 22.4414 40.6884 26.9637C31.3303 31.486 23.8301 37.9337 19.0489 45.5666C14.2676 53.1995 12.3992 61.7083 13.658 70.1161C14.9168 78.5239 19.2518 86.4901 26.1654 93.1L14.9797 101.45C14.072 102.153 13.4572 103.046 13.2127 104.016C12.9682 104.986 13.1051 105.989 13.606 106.9C14.0967 107.813 14.9301 108.595 16.0011 109.146C17.072 109.698 18.3326 109.995 19.6241 110H71.9549C79.6861 110 87.3416 108.836 94.4843 106.575C101.627 104.313 108.117 100.998 113.584 96.8198C119.051 92.6412 123.387 87.6804 126.346 82.2207C129.304 76.7611 130.827 70.9095 130.827 65C130.827 63.6739 130.138 62.4021 128.911 61.4645C127.684 60.5268 126.021 60 124.286 60Z" fill="#0F8B8D" />
                </svg>


                <h1>اخبار و اطلاعیه ها</h1>
            </div>

        </section>
    )
}

export default Intro
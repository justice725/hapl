/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
                "./src/*.{js,jsx,ts,tsx}",
                "./src/**/*.{js,jsx,ts,tsx}",
                ],
  theme: {
    extend: {
        fontFamily: {
            sans: ["Pretendard-Regular"], // Pretendard를 기본 폰트로 설정
          },
    },
  },
  plugins: [],
}


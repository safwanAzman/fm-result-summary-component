import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer className="fixed bottom-0 w-full p-1 bg-black ">
            <div className="flex items-center justify-center text-xs text-white">
              Challenge by <a className="px-1 text-teal-500 border-b-2 border-teal-500" href="https://www.frontendmentor.io/">Frontend Mentor.</a>
              Coded by <a className="pl-1 text-teal-500 border-b-2 border-teal-500" href="https://www.safwan-azman.dev/"> SafwanAzman.</a>
            </div>
        </footer>
    </div>
  )
}

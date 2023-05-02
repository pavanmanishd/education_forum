import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import { dark } from '@clerk/themes'
const publicPaths = ['/','/login']

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublicPage = publicPaths.includes(pathname);
  return (
    <ClerkProvider {...pageProps} 
      appearance={{
        baseTheme: dark
      }}
    >
      {isPublicPage ? (<Layout>
        <Component {...pageProps} />
      </Layout>) : (
        <>
          <SignedIn>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  )
}

import Head from "next/head"

interface Props {
  title: string
}

const Header = ({title}: Props) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
    </>
  )
}

export default Header
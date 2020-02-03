import styled from '@emotion/styled'
import { Footer } from '../../component/Footer'
import { Navbar } from '../navigation/Navbar'
import { NavBreadcrumb } from '../navigation/NavBreadcrumb'
import { ProductDetail } from './ProductDetail'
import { ProductRelated } from './ProductRelated'

const Container = styled.div`
  padding: 3rem 0rem;
  width: 100%;
  margin: auto;
  background-color: #ececec;
`

export const ProductDetailPage = () => {
  const nav = [
    {
      link: '/',
      icon: 'home',
      text: 'Home',
    },
    {
      link: '/',

      text: 'ฝ้าผนัง',
    },
    {
      link: '/',
      text: 'กระดานชนวน',
    },
  ]
  return (
    <>
      <Navbar />
      <Container>
        <NavBreadcrumb nav={nav} />
        <ProductDetail />
        <ProductRelated />
      </Container>
      <Footer />
    </>
  )
}
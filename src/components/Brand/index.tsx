import { BrandSection, ImgBrand, TitleBrand } from './style'

type BrandProps = {
  title: string
  src: string
  alt: string
}

const Brand = ({ title, src, alt }: BrandProps) => {
  return (
    <BrandSection>
      <ImgBrand src={src} alt={alt} />
      <TitleBrand className="mb-12 mt-1 pb-1 text-xl font-semibold">
        {title}
      </TitleBrand>
    </BrandSection>
  )
}

export default Brand

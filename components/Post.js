import Image from 'next/image'

function Post({ image, title }) {
    let { url, alt } = image
    const myLoader = ({ url }) => {
        return `${url}`
    }
  const MyImage = (props) => {
    return (
      <div>
        <div>
          <h2>{title}</h2>
          <Image
            loader={myLoader}
            src={src}
            alt={alt}
            width={300}
            height={300}
          />
        </div>
      </div>
    )
  }
}
  export default Post
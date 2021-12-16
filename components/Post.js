import Image from 'next/image'

function Post({ image, title }) {
    let { url, alt } = image
   /* const myLoader = ({ url, width }) => {
        return `${url}?w=${width}&fit=crop&crop=faces,edges`
    }
  const MyImage = (props) => {*/
    return (
      <div className="post">
        <div className="text">
          <h2>{title}</h2>
          <Image
            //loader={myLoader}
            src={`${url}`}
            alt={alt}
            width={300}
            height={300}
          />
        </div>
      </div>
    )
  }
//}
  export default Post
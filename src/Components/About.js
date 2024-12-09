import SignatureImg from '../Components/SignatureImg.png';
const About=()=>{
    return(
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to the Hom Lengo</h1>

      {/* Description Section */}
      <p className="text-lg text-center leading-relaxed max-w-2xl mb-12">
        Welcome to Home Lengo, where we turn houses into homes and dreams into
        reality. At Home, we understand that a home is more than just a
        physical space, it’s a place where memories are created, families grow,
        and life unfolds.
      </p>

      {/* Signature Section */}
      <div className="text-center mb-12">
        <p className="text-lg font-semibold">Leslie Alexander</p>
        <p className="text-sm text-gray-500">CEO & founder</p>
        <img
          src={SignatureImg}
          alt="Signature"
          className="mt-4 w-36"
        />
      </div>

      {/* Contact Us Button */}
      <button className="bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded-full shadow-md hover:bg-blue-700 transition">
        Contact us →
      </button>
    </div>
    )
}
export default About;
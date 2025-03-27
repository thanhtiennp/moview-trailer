import IconRatingHalf from "../../assets/rating-half.png";
import IconRating from "../../assets/rating.png";
import ImgMovie from "../../assets/temp-1.jpeg";
import IconPlay from "../../assets/play-button.png";

const Banner = () => {
  return (
    <div className="md:h-[600px] h-[1000px] w-full bg-banner bg-cover bg-center bg-no-repeat relative mt-[75px]">
      <div className="w-full h-full bg-black/40 " />
      <div className="flex flex-col md:flex-row items-center justify-between absolute md:top-1/2 top-10 -translate-x-1/2 left-1/2 md:-translate-y-1/2 w-full ">
        <div className="md:w-[50%] w-full ">
          <div className="flex flex-col space-y-6 items-start p-10">
            <p className="bg-gradient-to-r from-red-600 to-red-300 py-2 px-6">
              TV Show
            </p>
            <div className="flex flex-col space-y-4">
              <h1 className="text-[40px] font-bold text-white ">
                Nghe nói em thích tôi
              </h1>
              <div className="flex items-center space-x-3">
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
              </div>
              {/* <p className="text-white">
                Lorem Ipsum đơn giản là văn bản giả trong ngành in ấn và sắp chữ. 
                Lorem Ipsum đã là văn bản giả tiêu chuẩn từ những năm 1500, khi một thợ in vô danh xáo trộn các con chữ để tạo thành một cuốn sách mẫu. 
                Nó không chỉ tồn tại qua năm thế kỷ mà còn thích nghi với sự phát triển của sắp chữ điện tử.
              </p> */}
            </div>

            <div className="flex items-center space-x-5">
              <p className="text-white">
                Nhưng tôi không thích em
              </p>
              {/* <button className="py-2 px-3 bg-black  text-white border border-black font-bold">
                Chi tiết
              </button>
              <button className="py-2 px-3 bg-red-600 text-white font-bold">
                Xem Phim
              </button> */}
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group">
            <button className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={IconPlay} alt="play" className="w-16 h-16" />
            </button>
            <img
              src={ImgMovie}
              alt="banner"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

function LDStarFull() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.17728 1.04417C6.25293 1.08403 6.31432 1.14832 6.35238 1.22754L7.70041 4.03344L10.6652 4.50899C10.8805 4.54353 11.0284 4.75437 10.9954 4.97991C10.9826 5.06757 10.9432 5.14858 10.883 5.21097L8.75135 7.42066L9.38073 10.5003C9.42633 10.7234 9.29058 10.943 9.07753 10.9908C8.99118 11.0101 8.90112 10.9986 8.82178 10.958L5.99997 9.51408L3.17817 10.958C2.98241 11.0581 2.74618 10.9731 2.65053 10.7681C2.61176 10.6851 2.60074 10.5907 2.61922 10.5003L3.2486 7.42066L1.11697 5.21097C0.962127 5.05046 0.960854 4.78888 1.11413 4.62672C1.1737 4.56369 1.25106 4.52241 1.33477 4.50899L4.29953 4.03344L5.64756 1.22754C5.74549 1.02372 5.98265 0.941619 6.17728 1.04417Z" fill="#2E2F32"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.36564 4.54466L5.99997 1.70204L4.63429 4.54466L1.52101 5.04403L3.78346 7.38933L3.13563 10.5592L5.99997 9.09359L8.8643 10.5592L8.21648 7.38933L10.4789 5.04403L7.36564 4.54466ZM8.0405 3.64013L6.42286 0.273051C6.37718 0.177984 6.30351 0.100832 6.21273 0.0530012C5.97918 -0.0700572 5.69458 0.0284626 5.57708 0.273051L3.95944 3.64013L0.401726 4.21078C0.301276 4.2269 0.208444 4.27643 0.136954 4.35207C-0.0469752 4.54666 -0.045448 4.86055 0.140365 5.05317L2.69832 7.70479L1.94306 11.4004C1.92088 11.5089 1.93411 11.6221 1.98063 11.7218C2.09541 11.9678 2.37889 12.0698 2.6138 11.9496L5.99997 10.2169L9.38613 11.9496C9.48135 11.9983 9.58941 12.0121 9.69303 11.9889C9.94869 11.9316 10.1116 11.6681 10.0569 11.4004L9.30162 7.70479L11.8596 5.05317C11.9318 4.9783 11.9791 4.88108 11.9945 4.77589C12.0341 4.50524 11.8566 4.25224 11.5982 4.21078L8.0405 3.64013Z" fill="#2E2F32"/>
    </svg>
  );
}

function LDStarHalf() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 1C5.82689 1.00013 5.66019 1.10005 5.57707 1.27305L4.5 4L1.26478 4.35872C1.16433 4.37483 1.0715 4.42437 1.00001 4.5C0.816077 4.69459 0.817604 5.00848 1.00342 5.2011L3.00001 7.5L2.32925 10.9508C2.30707 11.0593 2.3203 11.1725 2.36682 11.2722C2.4816 11.5182 2.76508 11.6202 2.99998 11.5L5.99998 9.5L6 1Z" fill="#2E2F32"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.42286 0.273051L8.0405 3.64013L11.5982 4.21078C11.8566 4.25224 12.0341 4.50524 11.9945 4.77589C11.9791 4.88108 11.9318 4.9783 11.8596 5.05317L9.30162 7.70479L10.0569 11.4004C10.1116 11.6681 9.94869 11.9316 9.69303 11.9889C9.58941 12.0121 9.48135 11.9983 9.38613 11.9496L5.99997 10.2169L2.6138 11.9496C2.37889 12.0698 2.09541 11.9678 1.98063 11.7218C1.93411 11.6221 1.92088 11.5089 1.94306 11.4004L2.69832 7.70479L0.140365 5.05317C-0.045448 4.86055 -0.0469752 4.54666 0.136954 4.35207C0.208444 4.27643 0.301276 4.2269 0.401726 4.21078L3.95944 3.64013L5.57708 0.273051C5.69458 0.0284626 5.97918 -0.0700572 6.21273 0.0530013C6.30351 0.100832 6.37718 0.177984 6.42286 0.273051ZM7.36564 4.54466L10.4789 5.04403L8.21648 7.38933L8.8643 10.5592L6.5 9.34945V2.74285L7.36564 4.54466ZM5.5 2.74271V9.34941L3.13563 10.5592L3.78346 7.38933L1.52101 5.04403L4.63429 4.54466L5.5 2.74271Z" fill="#2E2F32"/>
    </svg>
  );
}

function TileRating({ value, count }: { value: number; count: string }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-px">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i + 1 <= Math.floor(value);
          const half = !filled && i < value;
          if (filled) return <LDStarFull key={i} />;
          if (half) return <LDStarHalf key={i} />;
          return <LDStarFull key={i} />;
        })}
      </div>
      <span className="text-[12px] leading-4 text-[#2E2F32]">{count}</span>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 8.5V13H8.5V8.5H13V7.5H8.5V3H7.5V7.5H3V8.5H7.5Z" fill="white"/>
    </svg>
  );
}

type Tile = {
  img: string;
  price: string;
  priceOriginal?: string;
  priceColor?: string;
  title: string;
  rating: number;
  reviews: string;
  badge?: boolean;
  sponsored?: boolean;
};

const TILES: Tile[] = [
  {
    img: "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F544c4c237f3342fb86b80bfa50fee769",
    price: "$27.99",
    title: "JLab Go Air Sport Bluetooth Earbuds, True Wireless with Charging Case, Teal",
    rating: 4.5,
    reviews: "25389",
    badge: true,
    sponsored: true,
  },
  {
    img: "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F8f62d61b205a46d3ad560688f10c7804",
    price: "Now $89.00",
    priceOriginal: "$99.00",
    priceColor: "text-[#2A8703]",
    title: "JBL Tune Buds - True wireless Noise Cancelling earbuds - Blue",
    rating: 4.5,
    reviews: "25389",
  },
  {
    img: "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F7991c50815bb4aee8119fabb4e5695d2",
    price: "$649.00",
    title: "Samsung Galaxy Buds3 Pro Bluetooth Earbuds with Charging Case",
    rating: 4.5,
    reviews: "25389",
  },
];

function TileCard({ tile }: { tile: Tile }) {
  return (
    <div className="flex w-[132px] shrink-0 flex-col gap-1">
      {tile.badge ? (
        <div className="flex">
          <span className="rounded bg-[#F0F5FF] px-2 py-1 text-[12px] font-bold leading-4 text-[#114AB6]">
            Best seller
          </span>
        </div>
      ) : (
        <div className="h-6" />
      )}

      <div className="relative h-[152px] w-full">
        <img src={tile.img} alt={tile.title} className="h-[132px] w-[132px] object-contain" />
        <button className="absolute bottom-0 left-0 flex h-10 items-center gap-2 rounded-full bg-[#0053E2] px-4 text-[16px] font-bold text-white">
          <PlusIcon />
          Add
        </button>
      </div>

      <div className="flex flex-col gap-1">
        {tile.sponsored ? (
          <span className="text-[12px] leading-4 text-[#2E2F32]">Sponsored</span>
        ) : (
          <div className="h-4" />
        )}

        {tile.priceOriginal ? (
          <div className="flex flex-col">
            <span className={`text-[18px] font-bold leading-6 ${tile.priceColor ?? "text-[#2E2F32]"}`}>
              {tile.price}
            </span>
            <span className="text-[12px] leading-4 text-[#74767C] line-through">
              {tile.priceOriginal}
            </span>
          </div>
        ) : (
          <span className="text-[18px] font-bold leading-6 text-[#2E2F32]">{tile.price}</span>
        )}

        <p className="line-clamp-3 text-[14px] leading-5 text-[#2E2F32]">{tile.title}</p>
        <TileRating value={tile.rating} count={tile.reviews} />
        <p className="text-[12px] leading-4 text-[#2E2F32]">
          Pickup <span className="font-extrabold">today</span>
          {"\n"}Shipping, arrives <span className="font-extrabold">today</span>
        </p>
      </div>
    </div>
  );
}

export default function CustomersAlsoConsidered() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col gap-0.5 px-4 pb-2 pt-4">
        <span className="text-[16px] font-bold leading-6 text-[#2E2F32]">
          Customers also considered
        </span>
        <span className="text-[12px] leading-4 text-[#74767C]">
          Based on what customers bought
        </span>
      </div>

      <div className="flex gap-2 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {TILES.map((tile, i) => (
          <TileCard key={i} tile={tile} />
        ))}
      </div>
    </div>
  );
}

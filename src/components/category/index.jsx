import React from "react";
import { BiSitemap, BiSolidSave, BiWallet } from "react-icons/bi";
import { GiDeliveryDrone } from "react-icons/gi";

import c1 from "../../assets/images/c1.webp";
import c2 from "../../assets/images/c2.webp";
import c3 from "../../assets/images/c3.webp";
import c4 from "../../assets/images/c4.webp";
import c5 from "../../assets/images/c5.webp";
import c6 from "../../assets/images/c6.webp";
import c7 from "../../assets/images/c7.webp";
import c8 from "../../assets/images/c8.webp";
import p1 from "../../assets/images/p1.webp";
import p2 from "../../assets/images/p2.webp";
import p3 from "../../assets/images/p3.webp";
import p4 from "../../assets/images/p4.webp";
import p5 from "../../assets/images/p5.webp";
import p6 from "../../assets/images/p6.webp";
import p7 from "../../assets/images/p7.webp";

const Category = () => {
  const features = [
    {
      id: 1,
      icon: <BiSitemap className="text-3xl" />,
      desc: (
        <p className="bangla text-lg font-semibold">
          বাজার করার জন্য পাচ্ছেন{" "}
          <span className="text-primary text-2xl">৮১৫০০০+ পণ্যসামগ্রী</span>
        </p>
      ),
    },
    {
      id: 1,
      icon: <BiWallet className="text-3xl" />,
      desc: (
        <p className="bangla text-lg font-semibold">
          পণ্য <span className="text-primary text-2xl">বুঝে </span> মূল্য পরিশোধ
          করুন
        </p>
      ),
    },
    {
      id: 1,
      icon: <GiDeliveryDrone className="text-3xl" />,
      desc: (
        <p className="bangla text-lg font-semibold">
          ডেলিভারি বুঝে নিন{" "}
          <span className="text-primary text-2xl">মাত্র ১ ঘণ্টায়</span>
        </p>
      ),
    },
    {
      id: 1,
      icon: <BiSolidSave className="text-3xl" />,
      desc: (
        <p className="bangla text-lg font-semibold">
          <span className="text-primary text-2xl">সাশ্রয়</span> করতে বুঝে নিন
          দারুণ অফার
        </p>
      ),
    },
  ];
  const categories = [
    {
      name: "ফল ও শাকসবজি",
      img: c1,
    },
    {
      name: "মাছ ও মাংস",
      img: c2,
    },
    {
      name: "রান্না সামগ্রী",
      img: c3,
    },
    {
      name: "পানীয়",
      img: c4,
    },
    {
      name: "পরিষ্কার সামগ্রী",
      img: c5,
    },
    {
      name: "কীটনাশক",
      img: c6,
    },
    {
      name: "স্টেশনারি এবং অফিস",
      img: c7,
    },
    {
      name: "প্রসাধনী",
      img: c8,
    },
  ];
  const popular = [
    {
      img: p1,
    },
    {
      img: p2,
    },
    {
      img: p3,
    },
    {
      img: p4,
    },
    {
      img: p5,
    },
    {
      img: p6,
    },
    {
      img: p7,
    },
  ];
  return (
    <div className="py-10">
      <div className="px-10">
        <div className="grid grid-cols-4 gap-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex justify-center items-center gap-4 py-8 border px-12"
            >
              <div className="flex justify-center items-center">
                {feature.icon}
              </div>
              <div>{feature.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="px-10">
          <div className="text-center">
            <h2 className="text-2xl bangla">জনপ্রিয় ক্যাটাগরি</h2>
          </div>

          <div className="grid grid-cols-8 gap-4 mt-8">
            {categories.map((category) => (
              <div className="flex justify-center items-center flex-col gap-4 shadow-lg border rounded p-4">
                <div className="w-24 h-24 rounded-full bg-gray-100 flex justify-center items-center">
                  <img
                    src={category.img}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="bangla text-lg font-semibold text-center">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-14">
        <div className="px-10">
          <div className="text-center">
            <h2 className="text-2xl bangla">পপুলার অন চালডাল</h2>
          </div>

          <div className="grid grid-cols-7 gap-4 mt-5">
            {popular.map((p) => (
              <div className="flex justify-center items-center flex-col gap-4 p-4">
                <div className="w-24 h-24 rounded-full bg-gray-100 flex justify-center items-center">
                  <img
                    src={p.img}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

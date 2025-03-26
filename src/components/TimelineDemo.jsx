// import img from "next/img";
import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className=" bg-[#290942]">
          <div className=" bg-[#290942]">
            <p className="text-white dark:text-neutral-200 text-3xl font-normal mb-8">
              Tata Mumbai Marathon 2024
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/3471450929/thumb/1.jpg?ip=x480"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <img
                src="https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/olncg0c8ugi5y6wfn2zv"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
          <div>
            <br />
            <p className="text-white dark:text-neutral-200 text-3xl font-normal mb-8">
              ITF Mens Tennis Championship 2024
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://acadwareassociation.s3.amazonaws.com/mslta_prd/news/1731840953NRL_9054-454.JPG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <img
                src="https://www.bluegoldsports.com/wp-content/uploads/2024/03/20240216_Tennis_WVUvsToledo_Doubles_MRR-3.jpg"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div>
            <p className="text-white dark:text-neutral-200 text-3xl font-normal mb-8">
              Mumbai Knights won the SAFF Bangabandhu Championship 2023
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://media.licdn.com/dms/image/D4E12AQHc93n6KW8a7g/article-cover_image-shrink_600_2000/0/1694800709899?e=2147483647&v=beta&t=5grSEo7ezAvfG4lfjE7zA4mdSs0p08Nhk3ivIW9jN7s"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/indian-football-team-085857124-16x9_0.jpg?VersionId=niCaKbo0UR8UnI0TFcGzBsqKBgMm_EhO&size=690:388"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
          <div>
            <br />
            <p className="text-white dark:text-neutral-200 text-3xl font-normal mb-8">
              Mumbai winning Ranji Trophy 2023
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/lsci/db/PICTURES/CMS/377700/377786.6.jpg "
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <img
                src="https://www.mumbaicricket.com/mca/albums/Ranji%20Trophy%202023-2024%20Champions/Ranji-Trophy-2023-2024-Champions-01.jpg"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
          <div>
            <br />
            <p className="text-white dark:text-neutral-200 text-3xl font-normal mb-8">
              Yonex-Sunrise All India Badminton Tournament
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://static.wixstatic.com/media/87acee_46eda19737694ab5a7f6983ca08faca4~mv2.jpg/v1/fill/w_640,h_538,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/87acee_46eda19737694ab5a7f6983ca08faca4~mv2.jpg"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <img
                src="https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/01/24095559/remote-11.jpg"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022 and Before",
      content: (
        <div>
          <div>
            <p className="text-white dark:text-neutral-200 text-3xl font-normal mb-8">
              National Games 2022
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://media.sportstiger.com/2022/07/36th-national-games-sportstiger.jpg"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYqWgDtw0t4IcmkDfoLm444aQxWMCSrjwRzA&s"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <img
                src="https://ss-i.thgim.com/public/incoming/uqty69/article66001252.ece/alternates/FREE_385/Kerala.jpg"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <img
                src="https://admin.risingkashmir.com/Source/News/b2c5df5a-ae92-4a53-bf38-113901c7c3b6.jpg"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
          <div>
            <br />
            <p className="text-white dark:text-neutral-200 text-3xl font-normal mb-8">
              International Yoga Day 2022
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.mid-day.com/images/images/2022/jun/yogamum9_d.jpg"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <img
                src="https://th-i.thgim.com/public/incoming/edbbqc/article65548004.ece/alternates/FREE_1200/2022-06-21T034623Z_1898234947_RC21WU9ISZ15_RTRMADP_3_YOGA-DAY-INDIA.JPG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-[#290942]">
      <Timeline data={data} />
    </div>
  );
}

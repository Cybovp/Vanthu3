"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./general_header.module.css";
import Avartar from "@/components/avatar/Avartar";
import Sidebar from "@/components/sidebar/Sidebar";
import Btn_header from "./icon-header/Btn_header";
import { useDispatch } from "react-redux";
import { setComponents, toggleSidebar } from "@/pages/store";
import Sidebar_dexuat from "@/components/sidebar/Sidebar_dexuat";
import Sidebar_quanlycongvan from "@/components/sidebar/Sidebar_quanlycongvan";

const General_header: React.FC = () => {
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState(2);
  const handle_dispatch_management = () => {
    const sidebarComponent = <Sidebar_quanlycongvan/>
    setActiveLink(1);
    // const containerComponent = <div>Container Content 2</div>;
    // dispatch(setComponents(sidebarComponent, containerComponent));
    dispatch(setComponents(sidebarComponent));
  };
  const handle_send_receive_dispatch = () => {
    const sidebarComponent = <Sidebar />;
    setActiveLink(2);
    dispatch(setComponents(sidebarComponent));
  };
  const handle_propose = () => {
    const sidebarComponent = <Sidebar_dexuat/>
    setActiveLink(3);
    dispatch(setComponents(sidebarComponent));
  };

  const [activeProfile, setActiveProfile] = useState(false);
  const [activeComponent, setActiveComponent] = useState<number | null>(null);

  const handleComponentClick = (id: number) => {
    if (activeComponent === id) {
      setActiveComponent(null);
    } else {
      setActiveComponent(id);
    }
  };
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className={`${styles.header_content}`}>
      {/* None */}
      <div
        className={styles.open_sidebar}
        id="open_sidebar"
        onClick={handleToggleSidebar}
      >
        <Image
          src={"/icon/open_sidebar.png"}
          width={50}
          height={50}
          alt="Avatar"
        />
      </div>
      {/* >=1024px */}
      <div className={`${styles.header}`}>
        <ul>
          <li className={activeLink === 1 ? styles.border_bot_blue : ""}>
            <Link
              href="/trang-chu-quan-ly-cong-van"
              onClick={handle_dispatch_management}
            >
              Quản lý công văn
            </Link>
          </li>
          <li
            className={`${activeLink === 2 ? styles.border_bot_blue : ""}`}
            onClick={handle_send_receive_dispatch}
          >
            <Link href="/quanly-cong-van">Gửi và nhận công văn </Link>
          </li>
          <li
            style={{ marginRight: "25px" }}
            className={activeLink === 3 ? styles.border_bot_blue : ""}
          >
            <Link href="/trang-quan-ly-de-xuat" onClick={handle_propose}>
              Đề xuất
            </Link>
          </li>
          <Btn_header
            image="/icon/icon_mesage.png"
            content="Tin nhắn"
            num_noti={10}
            id={1}
            isActive={activeComponent === 1}
            onClick={handleComponentClick}
          />
          <Btn_header
            image="/icon/icon_warning.png"
            content="Nhắc nhở"
            id={2}
            isActive={activeComponent === 2}
            onClick={handleComponentClick}
          />
          <Btn_header
            image="/icon/icon_notifi.png"
            content="Thông báo"
            id={3}
            isActive={activeComponent === 3}
            onClick={handleComponentClick}
          />
          <button
            className={`${styles.profile}`}
            onClick={() => {
              setActiveProfile(!activeProfile);
            }}
          >
            <a href="#" className={`${styles.a_profile}`}>
              <Avartar />
            </a>
            {activeProfile && (
              <div className={`${styles.block_profile}`}>
                <div className={`${styles.profile_infor}`}>
                  <div className={`${styles.profile_div_img}`}>
                    <a href="">
                      <Image
                        src={"/avatar.jpg"}
                        width={102}
                        height={102}
                        alt="Avatar"
                      />
                    </a>
                  </div>
                  <div className={`${styles.profile_infor_name}`}>
                    <p className={`${styles.fullname}`}>Nguyễn Viết Hoàng</p>
                    <p className={`${styles.job}`}>Nhân viên</p>
                    <p className={`${styles.id_staff}`}> ID : 573300 </p>
                  </div>
                  <div className={`${styles.profile_infor_list}`}>
                    <div className={`${styles.profile_infor_list_detail}`}>
                      <div className={`${styles.item_left}`}>
                        <Link
                          target="_blank"
                          rel="nofollow"
                          href="https://chamcong.timviec365.vn/quan-ly-cong-ty/thong-tin-tai-khoan.html"
                        >
                          <Image
                            src={"/icon/icon_profile.png"}
                            width={25}
                            height={25}
                            alt="Information"
                          />
                          Thông tin cá nhân
                        </Link>
                      </div>
                      <div className={`${styles.item_right}`}>
                        <Image
                          src={"/icon/icon_toggle.png"}
                          width={25}
                          height={25}
                          alt="Information"
                        />
                      </div>
                    </div>
                    <div className={`${styles.profile_infor_list_detail}`}>
                      <div className={`${styles.item_left}`}>
                        <Link
                          target="_blank"
                          rel="nofollow"
                          href="https://chamcong.timviec365.vn/quan-ly-cong-ty/thong-tin-tai-khoan.html"
                        >
                          <Image
                            src={"/icon/icon_profile.png"}
                            width={25}
                            height={25}
                            alt="Information"
                          />
                          Báo lỗi
                        </Link>
                      </div>
                      <div className={`${styles.item_right}`}>
                        <Image
                          src={"/icon/icon_toggle.png"}
                          width={25}
                          height={25}
                          alt="Information"
                        />
                      </div>
                    </div>
                    <div className={`${styles.profile_infor_list_detail}`}>
                      <div className={`${styles.item_left}`}>
                        <Link
                          target="_blank"
                          rel="nofollow"
                          href="https://chamcong.timviec365.vn/quan-ly-cong-ty/thong-tin-tai-khoan.html"
                        >
                          <Image
                            src={"/icon/icon_set.png"}
                            width={25}
                            height={25}
                            alt="Information"
                          />
                          Đánh giá
                        </Link>
                      </div>
                      <div className={`${styles.item_right}`}>
                        <Image
                          src={"/icon/icon_toggle.png"}
                          width={25}
                          height={25}
                          alt="Information"
                        />
                      </div>
                    </div>
                    <div className={`${styles.profile_infor_list_detail}`}>
                      <div className={`${styles.item_left}`}>
                        <Link
                          target="_blank"
                          rel="nofollow"
                          href="https://chamcong.timviec365.vn/quan-ly-cong-ty/thong-tin-tai-khoan.html"
                        >
                          <Image
                            src={"/icon/icon_set.png"}
                            width={25}
                            height={25}
                            alt="Information"
                          />
                          Cài đặt
                        </Link>
                      </div>
                      <div className={`${styles.item_right}`}>
                        <Image
                          src={"/icon/icon_toggle.png"}
                          width={25}
                          height={25}
                          alt="Information"
                        />
                      </div>
                    </div>
                    <div className={`${styles.profile_infor_list_detail}`}>
                      <div className={`${styles.item_left}`}>
                        <Link
                          target="_blank"
                          rel="nofollow"
                          href="https://chamcong.timviec365.vn/quan-ly-cong-ty/thong-tin-tai-khoan.html"
                        >
                          <Image
                            src={"/icon/icon_logout.png"}
                            width={25}
                            height={25}
                            alt="Information"
                          />
                          Đăng xuất
                        </Link>
                      </div>
                      <div className={`${styles.item_right}`}>
                        <Image
                          src={"/icon/icon_toggle.png"}
                          width={25}
                          height={25}
                          alt="Information"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </button>
        </ul>
      </div>
      <div className={styles.sub_menu}>
        <Link
          className={styles.a_sub_menu}
          href="/trang-chu-quan-ly-cong-van.html"
        >
          Quản lý công văn
        </Link>
        <Link className={styles.a_sub_menu} href="/quanly-cong-van.html">
          Gửi và nhận công văn{" "}
        </Link>
        <Link className={styles.a_sub_menu} href="/trang-quan-ly-de-xuat.html">
          Đề xuất
        </Link>
      </div>
    </div>
  );
};

export default General_header;

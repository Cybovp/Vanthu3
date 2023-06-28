interface MenuItem {
  id: number;
  title: string;
  image: string;
  href: string;
  content: string;
  subMenuItems?: MenuItem[];
}

export const menuData: MenuItem[] = [
  {
    id: 1,
    image: "img_vanbanden",
    title: "Văn bản đến",
    href: "/",
    content: "content 121",
    subMenuItems: [
      {
        id: 1,
        title: "Menu 1",
        image: "123",
        href: "/van-ban-den/van-ban-moi",
        content: "Văn bản mới",
      },
      {
        id: 2,
        title: "Menu 1",
        image: "123",
        href: "/van-ban-den/van-ban-da-xu-ly",
        content: "Văn bản đã xử lý",
      },
      {
        id: 3,
        title: "Menu 1",
        image: "123",
        href: "/van-ban-den/van-ban-can-duyet",
        content: "Văn bản cần duyệt",
      },
      {
        id: 4,
        title: "Menu 1",
        image: "123",
        href: "/van-ban-den/van-ban-thu-hoi",
        content: "Văn bản thu hồi",
      },
      {
        id: 5,
        title: "Menu 1",
        image: "123",
        href: "/van-ban-den/van-ban-cap-nhat",
        content: "Văn bản cập nhật",
      },
      {
        id: 6,
        title: "Menu 1",
        image: "123",
        href: "/van-ban-den/van-ban-thay-the",
        content: "Văn bản thay thế",
      },
    ],
  },
  {
    id: 2,
    image: "vanbandi",
    title: " Văn bản đi",
    href: "test href",
    content: "content 121",
    subMenuItems: [
      {
        id: 1,
        title: "Menu 2",
        image: "123",
        href: "/van-ban-di/them-van-ban-di",
        content: "Thêm văn bản đi",
      },
      {
        id: 2,
        title: "Menu 2",
        image: "123",
        href: "/van-ban-di/van-ban-di-da-gui",
        content: "Văn bản đi đã gửi",
      },
      {
        id: 3,
        title: "Menu 2",
        image: "123",
        href: "/van-ban-di/van-ban-di-cho-duyet",
        content: "Văn bản đi chờ duyệt",
      },
    ],
  },
  {
    id: 3,
    image: "img_dexuatcuatoi",
    title: "Đề xuất của tôi",
    href: "/",
    content: "content 121",
    subMenuItems: [
      {
        id: 1,
        title: "Menu 3",
        image: "123",
        href: "/",
        content: "Tôi gửi đi",
      },
      {
        id: 2,
        title: "Menu 3",
        image: "123",
        href: "/",
        content: "Gửi đến tôi",
      },
      {
        id: 3,
        title: "Menu 3",
        image: "123",
        href: "/",
        content: "Đang theo dõi",
      },
    ],
  }
];

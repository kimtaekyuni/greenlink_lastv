import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import setting_icon from "../assets/Setting_Icon.png";
import x_icon from "../assets/X_Icon.png";
import MainNav from "../components/MainNav";
import styles from "./NotificationsPage.module.css";

// const userInfo = {
//   user: {
//     id: 8,
//     username: "01024242424",
//     korean_name: "이보름보름",
//     profile_picture:
//       "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F47%2F63%2Fd1%2F4763d159c22b4256cfbb9c284613008f.jpg&type=sc960_832",
//     flower_pot: {
//       pot_number: 1234,
//       plant_name: "둘째매화",
//       start_date: "2023-11-29",
//       plant_type: "매화",
//       moisture_level: 90,
//     },
//     nickname: "해피캣",
//   },
//   message: "login success",
//   token: {
//     access:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyODEwOTY0LCJpYXQiOjE3MDEyNzQ5NjQsImp0aSI6ImVmOWU4NDJkZDdkMzQ2Njk5ODkzOWVlYzZjYmQ1ZDUyIiwidXNlcl9pZCI6OH0.zsSMFFhBioXLPuSmFlpZIyxRSfY1aji7VgcpHoDq-TE",
//   },
// };
// const accessToken = userInfo.token.access;

const userInfo = JSON.parse(localStorage.getItem("data"));
// const accessToken = userInfo.token.access;

// const notifiInfo = {
//   message: "complete",
//   content: {
//     flower_pot: {
//       pot_number: 1234,
//       plant_name: "Tungtungi",
//       start_date: "2023-11-28",
//       plant_type: "Chrysanthemum",
//       moisture_level: 90,
//     },
//     notifications: [
//       {
//         id: 1,
//         message: "Welcome Kyungbin Park.",
//         created_at: "2023-11-29T13:59:45.989172Z",
//         flower_pot: 1234,
//       },
//       {
//         id: 2,
//         message: "Welcome Kyungbin Park.",
//         created_at: "2023-11-29T15:07:40.225241Z",
//         flower_pot: 1234,
//       },
//       {
//         id: 3,
//         message: "Please give me water!!",
//         created_at: "2023-11-29T15:50:35.300359Z",
//         flower_pot: 1234,
//       },
//       {
//         id: 4,
//         message: "Please give me water!!",
//         created_at: "2023-11-29T15:52:50.258988Z",
//         flower_pot: 1234,
//       },
//       {
//         id: 5,
//         message: "NEXT watered the plant!",
//         created_at: "2023-11-29T15:53:05.981619Z",
//         flower_pot: 1234,
//       },
//       {
//         id: 6,
//         message: "Please give me water!!",
//         created_at: "2023-11-29T15:53:27.988244Z",
//         flower_pot: 1234,
//       },
//       {
//         id: 7,
//         message: "NEXT watered the plant!",
//         created_at: "2023-11-29T15:53:34.853738Z",
//         flower_pot: 1234,
//       },
//       {
//         id: 8,
//         message: "NEXT watered the plant!",
//         created_at: "2023-11-29T15:53:37.258004Z",
//         flower_pot: 1234,
//       },
//       {
//         id: 9,
//         message: "Welcome Boreum Lee.",
//         created_at: "2023-11-29T15:56:11.642586Z",
//         flower_pot: 1234,
//       },
//       {
//         id: 10,
//         message: "Welcome Boreum Lee.",
//         created_at: "2023-11-29T16:08:57.090903Z",
//         flower_pot: 1234,
//       },
//       {
//         id: 11,
//         message: "Welcome Boreum Boreum Lee.",
//         created_at: "2023-11-29T16:09:08.107531Z",
//         flower_pot: 1234,
//       },
//       {
//         id: 12,
//         message: "Welcome Sojeong Park.",
//         created_at: "2023-11-29T16:09:18.632585Z",
//         flower_pot: 1234,
//       },
//       {
//         id: 13,
//         message: "Park So-jeong So-jeong has left the group.",
//         created_at: "2023-11-29T16:16:47.256471Z",
//         flower_pot: 1234,
//       },
//       {
//         id: 14,
//         message: "Welcome Boreum Boreum Lee.",
//         created_at: "2023-11-29T16:21:17.471356Z",
//         flower_pot: 1234,
//       },
//     ],
//   },
// };

// const notifications = notifiInfo.content.notifications;

export function NotifiText({ className, message = "알림 내용 들어감요" }) {
  return <div className={className}>{message}</div>;
}

function NotifiBox({ item }) {
  function calculateTime(created_at) {
    const now = new Date();
    const createdTime = new Date(created_at);
    const diffInSeconds = Math.floor((now - createdTime) / 1000);

    if (diffInSeconds < 0) {
      alert("알림 오류: 미래의 알림입니다.");
      throw new Error("알림 오류: 미래의 알림입니다.");
    } else if (diffInSeconds < 60) {
      return "지금";
    } else if (diffInSeconds < 3600) {
      return ` 🔔${Math.floor(diffInSeconds / 60)}분 전`;
    } else if (diffInSeconds < 86400) {
      return ` 🔔${Math.floor(diffInSeconds / 3600)}시간 전`;
    } else if (diffInSeconds < 2592000) {
      return ` 🔔${Math.floor(diffInSeconds / 86400)}일 전`;
    } else {
      return ` 🔔${Math.floor(diffInSeconds / 2592000)}달 전`;
    }
  }

  return (
    <div className={styles.notifibox} key={item.id}>
      <div className={styles.noti}></div>
      <div className={styles.content}>
        <div>{calculateTime(item.created_at)}</div>
        <NotifiText message={item.message} />
      </div>
    </div>
  );
}

function NotifiList({ items }) {
  console.log(items);
  return (
    <div className={styles.notifilist}>
      {items?.map((item) => {
        return (
          <div key={item.id}>
            <NotifiBox item={item} />
          </div>
        );
      })}
    </div>
  );
}

function Notifications() {
  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    fetch(
      "https://port-0-cloudtype-32updzt2alpmcc05e.sel4.cloudtype.app/api/notifications/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userInfo.token.access}`,
        },
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.content);
        console.log(data.content.notifications);
        setNotifications(data.content.notifications);
        // 여기에서 data를 이용한 추가적인 작업을 수행합니다.
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    console.log(notifications);
  }, [notifications]);

  if (!notifications) {
    return null;
  }
  return (
    <div>
      <TopNav
        text="알림"
        link1="/setting"
        link2="/api/home"
        icon1={setting_icon}
        icon2={x_icon}
      />
      <NotifiList items={notifications} />

      <MainNav />
    </div>
  );
}

export default Notifications;

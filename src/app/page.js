//styles
import "@/src/styles/css/home.css";
//ui
import {
  Image,
  Button,
  Text,
  Box,
  Avatar,
  Card,
  Stack,
  IconButton,
  HStack,
  Link,
} from "@chakra-ui/react";
//icon
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const portItem = [
  {
    id: "1",
    title: "سبزینه",
    description: "فروش آنلاین سبزی، سیفیجات و انواع میوه های فصل",
    img: "/sabzine.png",
  },
  {
    id: "2",
    title: "حالا وقتشه",
    description: "به صورت آنلاین در هر جا زمان و کارهاتون رو مدیریت کنید",
    img: "/todo.png",
  },
  {
    id: "3",
    title: "موتور پلاس",
    description:
      "خرید و فروش موتور سیکلت و لوازم جانبی آن در هر لحظه به صورت فوری",
    img: "/motoplus.png",
  },
  {
    id: "4",
    title: "سالم باش",
    description: "با مربی های ما تمرین کنید و بهترین نسخه از خودتون رو بسازید",
    img: "/health.png",
  },
];

const social = [
  {
    id: "instagram",
    icon: <FaInstagram />,
    aria: "Instagram",
    link: "https://www.instagram.com/thepurple.ir?igsh=MWU0dGVmN2VlMWd4cQ==",
  },
  {
    id: "telegram",
    icon: <FaTelegram />,
    aria: "Telegram",
    link: "https://t.me/thisispurple",
  },
  {
    id: "whatsapp",
    icon: <FaWhatsapp />,
    aria: "Whatsapp",
    link: "https://wa.me/message/KWGY2OYSR4AHP1",
  },
];

export default function Home() {
  return (
    <>
      <header className="navbar">
        <Image src="/purpleLOGO.png" boxSize="80px" fit="cover" alt="LOGO" />
      </header>
      <main className="content items-center sm:items-start">
        <Box position="relative" overflow="hidden" className="banner">
          <Image
            src="/purpleLOGO.png"
            alt="Background"
            w="100%"
            h="100%"
            objectFit="cover" // توسط Chakra پیش‌فرض cover است
            className="bannerImg"
          />

          {/* متن روی عکس */}
          <Text className="bnr-text">
            بنفش از کجا اومد؟{"\n"}
            بنفش از ترکیب ی رنگ با تکنولوژی میاد، زمانی که من علاقه زیادی به رنگ
            بنفش داشتم و در کنارش برنامه نویسی رو شروع کرده بودم و در ذهن خودم
            به دنبال این بودم که یک برندی بسازم و اون رو رشد بدم، چه چیزی بهتر
            از بنفش یا به انگلیسی Purple. بنفش تا از گذشته تا به امروز در حوزه
            طراحی سایت فعالیت میکنه و تا الان سه نسخه ازش بیرون اوده که آخرین
            نسخش رو شما داخلش هستید.
            {"\n"}امیدوارم که بتونیم در کنارتون بهترین باشیم، منتظر خبر های خوب
            باشید.✨
          </Text>
        </Box>
        <div className="portfolio">
          {portItem.map((item) => (
            <Card.Root
              width="250px"
              height={"250px"}
              variant={"outline"}
              key={item.id}
              className="portCard"
            >
              <Card.Body gap={1}>
                <Avatar.Root size="lg" shape="rounded" bg={"white"}>
                  <Avatar.Image src={item.img} />
                  <Avatar.Fallback name="avatar" />
                </Avatar.Root>
                <Card.Title mb="2">{item.title}</Card.Title>
                <Card.Description overflowY={"20px"}>
                  {item.description}
                </Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="flex-start">
                <Button
                  variant="outline"
                  className="tracking-widest"
                  data-disabled
                  color={"black"}
                >
                  بزودی
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </div>
        <div className="aboutUs">
          <Box className="socialBox">
            <h2 className="text-xl">
              برای دریافت خبر های جدید و همراهی ما، دنبال کنید:
            </h2>
            <HStack wrap="wrap" gap="5">
              {social.map((item) => (
                <Link
                  href={item.link}
                  key={item.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    aria-label={item.aria}
                    rounded="full"
                    variant="outline"
                    border={"2px solid black"}
                    color={"black"}
                  >
                    {item.icon}
                  </IconButton>
                </Link>
              ))}
            </HStack>
          </Box>
          <Box className="resumeBox">
            برای آشنایی بیشتر با من (علیرضا شفیعی) میتوانید رزومه را دانلود و
            مشاهده کنید:
            <Button
              variant="outline"
              border={"2px solid black"}
              borderRadius={"7px"}
              color={"black"}
              width={"150px"}
              fontSize={"md"}
              as="a"
              href="/AlirezaShafiei.pdf"
              download="Alireza_Shafiei.pdf"
            >
              رزومه <HiOutlineDocumentDownload />
            </Button>
          </Box>
        </div>
      </main>
      <footer className="footer">
        <span>©purple 2025</span>
        <span>Created By Alireza Shafiei</span>
      </footer>
    </>
  );
}

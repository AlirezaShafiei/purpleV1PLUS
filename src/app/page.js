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
  { id: "instagram", icon: <FaInstagram />, aria: "Instagram" },
  { id: "telegram", icon: <FaTelegram />, aria: "Telegram" },
  { id: "whatsapp", icon: <FaWhatsapp />, aria: "Whatsapp" },
];

export default function Home() {
  return (
    <>
      <header className="navbar">
        <Image src="/purpleLOGO.png" boxSize="80px" fit="cover" alt="LOGO" />
      </header>
      <main className="content items-center sm:items-start">
        <Box
          position="relative"
          w="100%"
          h="350px"
          overflow="hidden"
          className="box1"
        >
          <Image
            src="/purpleLOGO.png"
            alt="Background"
            w="100%"
            h="100%"
            objectFit="cover" // توسط Chakra پیش‌فرض cover است
            className="banner"
          />

          {/* متن روی عکس */}
          <Text
            position="absolute"
            bottom="24"
            insetStart="3" // معادل left در LTR و right در RTL
            color="white"
            fontSize="xl"
            fontWeight="medium"
            lineHeight="long"
            textShadow="0 2px 12px rgba(0,0,0,0.6)"
            whiteSpace="pre-line"
            textAlign={"Center"}
          >
            بنفش از سال های پیش توسط <span>علیرضا شفیعی</span> ایجاد شد. نسخه
            های مختلفی از اون بیرون اومد، تغییرات زیادی روش ایجاد شد که شاید شما
            متوجه اون نمیشدید. بنفش برای شما یک رنگه ولی برای من یک علاقه هست.
            بخاطر علاقه ای ک به این رنگ داشتم اومدم و اون رو به یک برند تبدیل
            کردم تا برام بمونه.
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
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            border={"2px solid black"}
            borderBottom={"0"}
            padding={"15px"}
            borderRadius={"10px"}
          >
            <h2 className="text-xl">
              برای دریافت خبر های جدید و همراهی ما، دنبال کنید:
            </h2>
            <HStack wrap="wrap" gap="5">
              {social.map((item) => (
                <IconButton
                  key={item.id}
                  aria-label={item.aria}
                  rounded="full"
                  variant="outline"
                  border={"2px solid black"}
                  color={"black"}
                >
                  {item.icon}
                </IconButton>
              ))}
            </HStack>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            border={"2px solid black"}
            borderTop={"0"}
            padding={"15px"}
            borderRadius={"10px"}
          >
            برای آشنایی بیشتر با من (علیرضا شفیعی) میتوانید رزومه را دانلود و
            مشاهده کنید:
            <Button
              variant="outline"
              border={"2px solid black"}
              borderRadius={"7px"}
              color={"black"}
              width={"150px"}
              fontSize={"md"}
            >
              رزومه <HiOutlineDocumentDownload />
            </Button>
          </Box>
        </div>
      </main>
      <footer className="footer">
        <span>Created By Alireza Shafiei</span>
        <span>©purple 2025</span>
      </footer>
    </>
  );
}

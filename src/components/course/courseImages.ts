import logo from "@/assets/course/logo.png";
import samoz from "@/assets/course/samoz.png";
import lim from "@/assets/course/lim.png";
import oboMne from "@/assets/course/obo-mne.png";
import fotoUbrat from "@/assets/course/foto-ubrat-zak.png";
import taynPok from "@/assets/course/tayn-pok.png";
import vykupTovara from "@/assets/course/vykup-tovara.png";
import komZaZadanie from "@/assets/course/kom-za-zadanie.png";
import komZaVyvod from "@/assets/course/kom-za-vyvod.png";
import horPlohOt from "@/assets/course/hor-ploh-ot.png";
import primerVizitki from "@/assets/course/primer-vizitki.jpg";
import primerSayta from "@/assets/course/primer-sayta.jpg";
import prezenShob from "@/assets/course/prezen-shob.jpg";
import infografika from "@/assets/course/infografika.png";
import limityKon from "@/assets/course/limity-kon.jpg";
import xboxInst from "@/assets/course/xbox-inst.png";
import xboxDns from "@/assets/course/xbox-dns.png";
import onSim from "@/assets/course/smsfast.png";
import prezentaciya from "@/assets/course/prezentaciya.png";
import horoshiyPromt from "@/assets/course/horoshiy-promt.png";
import plohoyPromt from "@/assets/course/plohoy-promt.png";
import uyutnayaScena from "@/assets/course/uyutnaya-scena.png";
import arena1 from "@/assets/course/arena-1.png";
import arena2 from "@/assets/course/arena-2.png";
import arena3 from "@/assets/course/arena-3.png";
import promtVizitka from "@/assets/course/promt-vizitka.png";
import promtKopirayting from "@/assets/course/promt-kopirayting.png";
import promtBot from "@/assets/course/promt-bot.png";
import promtLending from "@/assets/course/promt-lending.png";

export type CourseImage = { url: string; w: number; h: number; alt: string; borderColor?: 'green' | 'red'; };

// Маппинг русскоязычных ключей на прямое локальное изображение
export const courseImages: Record<string, CourseImage> = {
  "лого.png": { url: logo, w: 200, h: 60, alt: "Логотип Workzilla" },
  "самоз.png": { url: samoz, w: 907, h: 771, alt: "Оформление самозанятости" },
  "лим.png": { url: lim, w: 395, h: 432, alt: "Лимиты для самозанятых" },
  "обо_мне.png": { url: oboMne, w: 781, h: 159, alt: "Раздел «О себе» в профиле" },
  "фото_убрать_зак.png": { url: fotoUbrat, w: 843, h: 146, alt: "Как отменить заказ" },
  "тайн_пок.png": { url: taynPok, w: 805, h: 772, alt: "Тайный покупатель" },
  "выкуп_товара.png": { url: vykupTovara, w: 795, h: 738, alt: "Выкуп товара" },
  "ком_за_задание.png": { url: komZaZadanie, w: 779, h: 520, alt: "Комиссия за задание" },
  "ком_за_вывод.png": { url: komZaVyvod, w: 258, h: 191, alt: "Комиссия за вывод" },
  "хор_плох_от.png": { url: horPlohOt, w: 813, h: 502, alt: "Хороший и плохой отзыв" },
  "пример_визитки.jpg": { url: primerVizitki, w: 736, h: 1104, alt: "Пример визитки" },
  "пример_сайта.jpg": { url: primerSayta, w: 3000, h: 2000, alt: "Пример сайта" },
  "прзен_шоб.png": { url: prezenShob, w: 500, h: 503, alt: "Презентация в Gamma" },
  "инфографика.png": { url: infografika, w: 900, h: 1200, alt: "Инфографика в Айдентике" },
  "лимиты_кон.jpg": { url: limityKon, w: 1050, h: 700, alt: "Лимиты нейросетей" },
  "xdox_инст.png": { url: xboxInst, w: 989, h: 672, alt: "Установка XboxDNS" },
  "xbox_dns.png": { url: xboxDns, w: 1918, h: 764, alt: "XboxDNS" },
  "on_sim.png": { url: onSim, w: 1903, h: 914, alt: "SMSFAST — главная страница сервиса" },
  "презентация.png": { url: prezentaciya, w: 1919, h: 919, alt: "Презентация Gamma AI" },
  "хороший_промт.png": { url: horoshiyPromt, w: 694, h: 177, alt: "Хороший промт", borderColor: "green" },
  "плохой_промт.png": { url: plohoyPromt, w: 694, h: 102, alt: "Плохой промт", borderColor: "red" },
  "Уютная_сцена_челове.png": { url: uyutnayaScena, w: 1024, h: 1024, alt: "Пример генерации изображения" },
  "1_шаг(arena).png": { url: arena1, w: 491, h: 236, alt: "Arena AI — шаг 1" },
  "2_шаг(arena).png": { url: arena2, w: 834, h: 429, alt: "Arena AI — шаг 2" },
  "3_шаг(arena).png": { url: arena3, w: 735, h: 471, alt: "Arena AI — шаг 3" },
  "промт_визитка.png": { url: promtVizitka, w: 831, h: 294, alt: "Пример промпта для создания визитки" },
  "промт_копирайтинг.png": { url: promtKopirayting, w: 825, h: 160, alt: "Пример промпта для копирайтинга" },
  "промт_бот.png": { url: promtBot, w: 819, h: 236, alt: "Пример промпта для создания бота" },
  "промт_лендинг.png": { url: promtLending, w: 797, h: 265, alt: "Пример промпта для создания лендинга" },
};

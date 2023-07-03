import Link from 'next/link';

import { ButtonOutlined } from '@/atoms';
import {
  FacebookIcon,
  InstagramIcon,
  LeftArrowIcon,
  LinkdinIcon,
  TwitterIcon,
} from '@/public/assets/svgIcons';

const site = ['Features', 'Products', 'Company', 'Pricing', 'Support'];

const legal = ['Privacy Policy', 'Terms & Condition', 'Company Policy'];

const company = ['About Us', 'Our Team', 'Our Story', 'Career'];

const follow = ['Linkedin', 'Facebook', 'Instagram', 'Twitter'];

export function Footer() {
  return (
    <div className=" container mt-0 md:mt-28">
      <div className=" grid items-center py-28 md:grid-cols-2">
        <div className="flex flex-col gap-3 text-white">
          <h1 className=" text-gradient w-fit text-6xl font-bold">PlotAuc</h1>
          <p className="my-5 max-w-lg text-xl font-normal opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam
            sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed
            iaculis. Mauris, curabitur scelerisque.
          </p>
          <div>
            <ButtonOutlined>
              <div className="flex items-center gap-3">
                <span>Contact Us </span> <LeftArrowIcon />
              </div>
            </ButtonOutlined>
          </div>
          <div className="mt-5 flex items-center gap-8 md:gap-12">
            <LinkdinIcon /> <FacebookIcon /> <InstagramIcon /> <TwitterIcon />
          </div>
        </div>

        <div className=" mt-10 grid grid-cols-2 justify-end text-white md:mt-0">
          <div className="my-5 flex flex-col gap-3">
            <span className="text-xl font-bold">Site</span>
            {site.map((val, ind) => (
              <Link key={ind} href={`/${val}`} replace>
                <a className=" text-xl opacity-70">{val}</a>
              </Link>
            ))}
          </div>

          <div className="my-5 flex flex-col gap-3">
            <span className="text-xl font-bold">Legal</span>
            {legal.map((val, ind) => (
              <Link key={ind} href={`/${val}`} replace>
                <a className=" text-xl opacity-70">{val}</a>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold">Company</span>
            {company.map((val, ind) => (
              <Link key={ind} href={`/${val}`} replace>
                <a className=" text-xl opacity-70">{val}</a>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold">Follow us</span>
            {follow.map((val, ind) => (
              <Link key={ind} href={`/${val}`} replace>
                <a className=" text-xl opacity-70">{val}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

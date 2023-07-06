import Image from 'next/image';
import Link from 'next/link';
import { NavLinks } from '@/constants';
import AuthProviders from '@/components/AuthProviders';

const Navbar = () => {
  const session = {};

  return (
    <nav className='flexBetween navbar'>
      <div className='flex-a flexStart gap-10'>
        <Link href='/'>
          <Image src='/logo.svg' width={115} height={43} alt='Flexibble Logo' />
        </Link>

        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              <li>{link.text}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className='flexCenter gap-4'>
        {session ? (
          <>
            User Photo
            <Link href='/create-project'>Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
